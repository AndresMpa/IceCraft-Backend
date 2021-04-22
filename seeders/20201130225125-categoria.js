'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categoria', [{
            nombre: 'Categoria_test',
            descripcion: 'lorem limsus test',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nombre: 'Categoria_test_2',
            descripcion: 'lorem limsus test',
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categoria', null, {});
    }
};