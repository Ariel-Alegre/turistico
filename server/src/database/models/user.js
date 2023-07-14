// models/User.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Relación uno a uno con UserDetails
      User.hasOne(models.UserDetails, {
        foreignKey: 'userId', // Nombre de la clave foránea en UserDetails
        as: 'details', // Alias para acceder a los detalles del usuario
      });
    }
  }
  User.init(
    {
      // Atributos del modelo 'User'
      name: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
