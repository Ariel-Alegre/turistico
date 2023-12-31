'use strict';
const path = require('path');
const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
      },
      people: {
        type: Sequelize.STRING,
      },
      summary: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      imageFile: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Almacena la ruta de la imagen en el sistema de archivos
      },
      status: {
        type: Sequelize.STRING,
      },
      continent: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      daysAtentions: {
        type: Sequelize.STRING
      },
      infoImportant: {
        type: Sequelize.ARRAY(Sequelize.STRING), 
      },
      hoursAtetionsInitial: {
        type: Sequelize.STRING,
      },
      hoursAtentionsFinally: {
        type: Sequelize.STRING,
      },
      reservedDates: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      listDetails: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};
