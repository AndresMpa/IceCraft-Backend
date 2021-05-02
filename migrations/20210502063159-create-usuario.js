'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      lugarNacimiento: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.BOOLEAN
      },
      direccion: {
        type: Sequelize.STRING
      },
      temaLiterario: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      usuario: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      imagenPerfil: {
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
    await queryInterface.dropTable('Usuarios');
  }
};