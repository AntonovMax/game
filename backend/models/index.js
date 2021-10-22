// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


'use strict';
const path = require('path');
const { Sequelize } = require('sequelize');
const env = 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];
// Получаем данные для подключения
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
  },
);
// Инициализируем модели
const Users = require('./user')(sequelize, Sequelize.DataTypes);
const Topics = require('./topic')(sequelize, Sequelize.DataTypes);
const Questions = require('./question')(sequelize, Sequelize.DataTypes);

// Связываем модели

// Basket.belongsTo(Mycards, { foreignKey: 'cardId' });
// Mycards.hasMany(Basket, { foreignKey: 'cardId' });
// Usercards.hasMany(Basket, { foreignKey: 'userId' });
// Basket.belongsTo(Usercards, { foreignKey: 'userId' });
Questions.belongsTo(Topics);
Topics.hasMany(Questions)
// module.exports = { Usercards, Mycards, Basket };
module.exports = { Users, Topics, Questions }
