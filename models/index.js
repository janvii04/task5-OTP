const Sequelize = require("sequelize");
const sequelize = require("../dbconnection").sequelize;

module.exports = {
  usermodel: require("./userModel")(Sequelize, sequelize, Sequelize.DataTypes),
};