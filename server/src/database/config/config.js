require('dotenv').config()

module.exports = {
  development: {
    database: "turistic",
    username: "root",
    password: "password",
    host: "localhost",
    port: "3306",
    dialect: "mysql",
  }
}
