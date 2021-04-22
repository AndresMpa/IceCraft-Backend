'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Categoria', [
      {
      nombre: 'Categoria_test_3',
      descripcion: 'lorem limsus test',
      createdAt: new Date(),
      updatedAt: new Date()
      }])

    let categorias = await queryInterface.sequelize.query(
        "SELECT id from Categoria;"
      );

    return queryInterface.bulkInsert('Articulos', [
      {
        codigo: 'art00001',
        nombre: 'Articulo 1',
        descripcion: 'lorem limsus test',
        precio_venta: 1000,
        categoriaId: categorias[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 'art00002',
        nombre: 'Articulo 2',
        descripcion: 'lorem limsus test',
        precio_venta: 1000,
        categoriaId: categorias[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articulos', null, {});
  }
};
