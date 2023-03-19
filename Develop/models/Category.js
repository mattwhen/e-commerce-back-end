// Define our Models in sequelize here: 
// In this case, we are defining our Models by 
// Extending Model and calling init(attributes, options)
// Models are an abstraction that represents a table in our database. In sequelize, it is a class that extends Model.
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      // Model attributes are defined here
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category', // Choose the model (table) name
  }
);

module.exports = Category;
