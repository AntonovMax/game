"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Topics", [
      {
        name: "Азия",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Эльбрус",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Это просто КОСМОС",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Зверьё",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  },
};
