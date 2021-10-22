const {
  Model, 
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
    }
  };
 
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scores: {
      type: DataTypes.INTEGER,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'Users',
  });
  return User;
};
