require('dotenv').config()

module.exports = {
  development: {
    username: 'postgres',
    password: 'password',
    database: 'turistic',
    host: 'localhost',
    port: '5432',
    dialect: "postgres"
  },

/*   production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: "postgres"
  },
} */


}