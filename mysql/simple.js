const pool = require('./index')

/**
 * @param sql sql语句
 * @param values 执行sql所需要的值
 */
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) reject(err)
      else {
        conn.query(sql, values, (err, results) => {
          if (err) reject(err)
          else {
            resolve(results)
          }
          conn.release()
        })
      }
    })
  })
}

module.exports = query