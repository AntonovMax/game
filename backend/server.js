require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { Users, Questions, Topics } = require("./models/index");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

//session
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const sConfig = {
  name: "uSID",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET || "TEST",
  reseve: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 10,
  },
};

//session use
app.use(session(sConfig));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json({ id: req.session.userId, name: req.session.name });
});

app.post("/registration", async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName, password);
  const user = await Users.findOne({
    where: {
      userName,
    },
    raw: true,
  });
  if (user) {
    return res.json({
      message: false,
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = await Users.create(
    {
      userName,
      password: hash,
    },
    { returning: true }
  );
  req.session.Authenticated = true;
  req.session.user = newUser;
  return res.json({ message: true });
});

app.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const loginFromDB = await Users.findOne({
    where: {
      userName,
    },
    raw: true,
  });
  console.log(loginFromDB);
  if (userName) {
    const match = await bcrypt.compare(password, loginFromDB.password);
    if (match) {
      req.session.Authenticated = true;
      req.session.user = userName;
      return res.json({
        message: true,
      });
    }
  }
  return res.json({ message: false });
});

// app.get("/cardList", async (req, res) => {
//   const arrOfQuestions = await Questions.findAll();
//   const arrToSend = arrOfQuestions.map((el) => ({
//     id: el.dataValues.id,
//     question: el.dataValues.question,
//     answer: el.dataValues.answer,
//     price: el.dataValues.price,
//     topic: el.dataValues.topic,
//   }));
app.get("/cardList", async (req, res) => {
  console.log("Зешёл на */cardList");
  const arrToSend = await Topics.findAll({ include: { model: Questions } });
  console.log("После FindALl");
  res.json(arrToSend);
});

app.listen(PORT, () => {
  console.log(`server app on ${PORT}`);
});
