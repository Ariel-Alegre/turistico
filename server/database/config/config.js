require('dotenv').config()
console.log(process.env.POSTGRES_USER);
console.log(process.env.POSTGRES_PASSWORD);
console.log(process.env.POSTGRES_DATABASE);
console.log(process.env.POSTGRES_HOST);



module.exports = {
  
   development: {
    
    username:process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
  },

  production: {
    username:process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
  },   

/*   development: {
    username:'postgres',
    password: 'password',
    database: 'turistic',
    host: 'localhost',
    port: '5432',
    dialect: "postgres"
  },

  production: {
    username:'postgres',
    password: 'password',
    database: 'turistic',
    host: 'localhost',
    port: '5432',
    dialect: "postgres"
  }, */
}  


