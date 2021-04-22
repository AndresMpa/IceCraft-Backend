'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', [
        {
            nombre: 'admin',
            email: 'admin@gmail.com',
            password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
            rol: 'Administrador',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            nombre: 'client',
            email: 'client@gmail.com',
            password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
            rol: 'Administrador',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};