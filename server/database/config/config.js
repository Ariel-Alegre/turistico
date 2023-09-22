require('dotenv').config()
console.log(process.env.PGUSER);
console.log(process.env.PGPASSWORD);
console.log(process.env.PGDATABASE);
console.log(process.env.PGPORT);
console.log(process.env.PGHOST);




module.exports = {
/*    development: {
    username:'postgres',
    password: 'PAD6PVvBXV7mcePPdtAJ',
    database: 'railway',
    host: 'containers-us-west-41.railway.app',
    port: '5953',
    dialect: "postgres"
  },

  production: {
    username:'postgres',
    password: 'PAD6PVvBXV7mcePPdtAJ',
    database: 'railway',
    host: 'containers-us-west-41.railway.app',
    port: '5953',
    dialect: "postgres"
  },   
 */
   development: {
    username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host:process.env.PGHOST,
  port: process.env.PGHOST,
  dialect: 'postgres'
  },

  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host:process.env.PGHOST,
    port: process.env.PGHOST,
    dialect: 'postgres'
  }, 
}  


