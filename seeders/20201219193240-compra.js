'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Articulos', [
      {
        codigo: 'art00003',
        nombre: 'Articulo 3',
        descripcion: 'lorem limsus test',
        precio_venta: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }])

    queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'client2',
        email: 'client2@gmail.com',
        password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
        rol: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      }])

    let articulos = await queryInterface.sequelize.query(
      "SELECT id from Articulos;"
    );

    let usuarios = await queryInterface.sequelize.query(
      "SELECT id from Usuarios;"
    );

    return queryInterface.bulkInsert('Compras', [
      {
        descripcion: 'lorem limsus test',
        cantidad: 2,
        usuarioId: usuarios[0][0].id,
        articuloId: articulos[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'lorem limsus test',
        cantidad: 5,
        usuarioId: usuarios[0][0].id,
        articuloId: articulos[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Compras', null, {});
  }
};
