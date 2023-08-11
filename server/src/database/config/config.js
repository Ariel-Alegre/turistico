require('dotenv').config()

module.exports = {
  development: {
    database: "turistic",
    username: "postgres",
    password: "password",
    host: "localhost",
    port: "5432",
    dialect: "postgres",
  }
}
