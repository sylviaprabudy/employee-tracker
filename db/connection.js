const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // MySQL Username
  user: "root",
  // MySQL Password
  password: "myname9S!",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;