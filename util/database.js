const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema_1", "root", "Test@12345", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
