require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "qaSOA7Hxmpz4dw5e2Pw4",
    database: "railway",
    host: "containers-us-west-78.railway.app",
    port: "7846",
    dialect: "postgres"
  },

  production: {
    username: "postgres",
    password: "qaSOA7Hxmpz4dw5e2Pw4",
    database: "railway",
    host: "containers-us-west-78.railway.app",
    port: "7846",
    dialect: "postgres"
  },
}
