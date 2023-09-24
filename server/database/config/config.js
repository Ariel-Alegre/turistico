require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'turistic',

  },
  production: {
    dialect: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'turistic',
   
  },
};
