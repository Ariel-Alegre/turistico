require('dotenv').config()
console.log(process.env.PGUSER);
console.log(process.env.PGPASSWORD);
console.log(process.env.PGDATABASE);
console.log(process.env.PGPORT);
console.log(process.env.PGHOST);




module.exports = {
    development: {
      url: process.env.DATABASE_URL, // Utiliza la URL proporcionada en tu entorno
      dialect: 'postgres'
    },
    production: {
      url: process.env.DATABASE_URL, // Utiliza la URL proporcionada en tu entorno
      dialect: 'postgres'
    }
  // ... otras configuraciones ...
};



