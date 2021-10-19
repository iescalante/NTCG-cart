const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "new_schema_1",
  password: "Test@12345",
});

module.exports = pool.promise();
