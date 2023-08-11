require('dotenv').config()

module.exports = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres"
  },

  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres"
  },
}


/* 
PGDATABASE=railway
PGHOST=containers-us-west-78.railway.app
PGPASSWORD=qaSOA7Hxmpz4dw5e2Pw4
PGPORT=7846
PGUSER=postgres
*/