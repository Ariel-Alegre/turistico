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
    username: 'elari',
  password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z',
  database: 'turistic',
  host: 'dpg-ck6ubmnq54js73ae9esg-a',
  port: '5432',
  dialect: 'postgres'
  },

  production: {
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z',
    database: 'turistic',
    host: 'dpg-ck6ubmnq54js73ae9esg-a',
    port: '5432',
    dialect: 'postgres'
  }, 
}  


