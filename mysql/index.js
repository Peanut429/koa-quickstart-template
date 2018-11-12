const mysql = require('mysql')
const mysql_conf = require('../config')

module.exports = mysql.createPool({
  host: mysql_conf.host,
  user: mysql_conf.user,
  password: mysql_conf.password,
  port: mysql_conf.port,
  database: mysql_conf.database,
  connectionLimit: mysql_conf.connectionLimit
})
