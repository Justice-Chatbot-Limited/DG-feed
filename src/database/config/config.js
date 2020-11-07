require('dotenv').config();
module.exports = {
    development: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.MYSQL_DB,
      dialect: "mysql"
    }
}