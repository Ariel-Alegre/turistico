require('dotenv').config()

console.log(process.env.DATABASE_URL);




module.exports = {
    development: {
      url: 'postgres://elari:Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z@dpg-ck6ubmnq54js73ae9esg-a.oregon-postgres.render.com/turistic', // Utiliza la URL proporcionada en tu entorno
     ssl: true,
      dialect: 'postgres'
    },
    production: {
      url: 'postgres://elari:Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z@dpg-ck6ubmnq54js73ae9esg-a.oregon-postgres.render.com/turistic', // Utiliza la URL proporcionada en tu entorno
      ssl: true,
    
      dialect: 'postgres'
    }
  // ... otras configuraciones ...
};



