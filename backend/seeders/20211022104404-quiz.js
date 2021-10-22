"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Questions", [
      {
        question: "Самое большое по площади государство в Азии?",
        answer: "Китай",
        price: 200,
        TopicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Страна, получившая название от реки, протекающей по её территории?",
        answer: "Индия",
        price: 400,
        TopicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Самое соленое море в мире, омывающее берега Азии?",
        answer: "Красное море",
        price: 600,
        TopicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Чем знаменита Япония на весь мир?",
        answer: "Аниме",
        price: 800,
        TopicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что буквально означает японское название Японии «Нихон»?",
        answer: "Источник Солнца",
        price: 1000,
        TopicId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //*************************************************************** */
      {
        question: "Сколько вершин у Эльбруса?",
        answer: "две",
        price: 200,
        TopicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Как называется, гостиница расположенная на высоте 4200 метров на южном склоне Эльбруса?",
        answer: "Приют одиннадцати",
        price: 400,
        TopicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Одна из основных опасностей, подстерегающих альпинистов в этих краях?",
        answer: "Ветер",
        price: 600,
        TopicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Сколько человек ежегодно погибает на склонах Эльбруса в среднем?",
        answer: "10",
        price: 800,
        TopicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Администратор "Санатория Сатаны"?',
        answer: "Володя",
        price: 1000,
        TopicId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //*************************************************************** */
      {
        question:
          "Шарик золотой заглянул в оконце, и танцуют зайчики. Что же это?",
        answer: "солнце",
        price: 200,
        TopicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Солнце больше по размеру, чем другие звезды? (Да/Нет)",
        answer: "нет",
        price: 400,
        TopicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Что влияет на цвет звезды?",
        answer: "Температура",
        price: 600,
        TopicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Первая собака, полетевшая в космос и не вернувшаяся от туда?",
        answer: "Лайка",
        price: 800,
        TopicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Где находится настоящий космос?",
        answer: "в тебе",
        price: 1000,
        TopicId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //*************************************************************** */
      {
        question: "Как называется семейство львов?",
        answer: "прайд",
        price: 200,
        TopicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "В какой категории животных больше всего представителей?",
        answer: "Членистоногие",
        price: 400,
        TopicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Как еще принято называть барса?",
        answer: "Ирбис",
        price: 600,
        TopicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question:
          "Первая собака, полетевшая в космос и не вернувшаяся от туда?",
        answer: "Лайка",
        price: 800,
        TopicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Кто теперь настоящий тигр?",
        answer: "Армен",
        price: 1000,
        TopicId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
