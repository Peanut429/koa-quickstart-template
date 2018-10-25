const mysql = require('mysql')

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'cAuth',
  connectionLimit: 10
})
