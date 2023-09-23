require('dotenv').config()

console.log(process.env.DATABASE_URL);




module.exports = {
  development: {
    dialect: 'postgres',
    host: 'dpg-ck6ubmnq54js73ae9esg-a',
    port: 5432,
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z', // Deja esto en blanco si no tienes una contraseña
    database: 'turistic',
    ssl: true, // Habilita SSL/TLS si es necesario
    dialectOptions: {
      ssl: {
        require: true, // Esto indica que SSL/TLS es requerido si es necesario
      },
    },
  },
  production: {
    dialect: 'postgres',
    host: 'dpg-ck6ubmnq54js73ae9esg-a',
    port: 5432,
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z', // Deja esto en blanco si no tienes una contraseña
    database: 'turistic',
    ssl: true, // Habilita SSL/TLS si es necesario
    dialectOptions: {
      ssl: {
        require: true, // Esto indica que SSL/TLS es requerido si es necesario
      },
    },
  },
  // Otras configuraciones...
};






