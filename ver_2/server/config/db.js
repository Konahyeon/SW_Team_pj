var mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "diary_db3", //db명

});
module.exports = db;
