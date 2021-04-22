'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Articulos', 
      'caracteristicas',
      {
        type: Sequelize.STRING
      });
    await queryInterface.addColumn(
      'Articulos',
      'urlImage', 
      {
        type: Sequelize.STRING
      });
    },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Articulos');
  }
};