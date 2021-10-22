const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Topic}) {
      Question.belongsTo(Topic)
    }
  };
  Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING
    },
    answer: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    TopicId: {
      type: DataTypes.STRING,
      references: {
        model: 'Topic',
        key: 'id'
      }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, 
  {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
