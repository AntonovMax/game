'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      TopicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
          key: 'id'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Questions');
  }
};
