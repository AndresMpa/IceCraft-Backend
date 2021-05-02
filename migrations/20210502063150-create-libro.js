'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.BOOLEAN
      },
      numeroPagina: {
        type: Sequelize.INTEGER
      },
      editorial: {
        type: Sequelize.STRING
      },
      issn: {
        type: Sequelize.STRING
      },
      idioma: {
        type: Sequelize.STRING
      },
      fechaPublicacion: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Libros');
  }
};