require('dotenv').config();

console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost', // Utiliza la variable de entorno o un valor predeterminado
    port: 5432,
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z',
    database: 'turistic',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
  production: {
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost', // Utiliza la variable de entorno o un valor predeterminado
    port: 5432,
    username: 'elari',
    password: 'Mwi5VpKFvabakGQo6xKXjpkej0Mj3q4Z',
    database: 'turistic',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
};
