const request = require('supertest')
const app = require('../index')

describe('usuarios Endpoints', () => {
    var token;

    beforeAll((done) => {
        request(app)
            .post('/api/usuario/login')
            .send({
                email: 'admin@gmail.com',
                password: 'micontraseña',

            })
            .end((err, response) => {
                var result = JSON.parse(response.text);
                token = result.tokenReturn;
                done();
            });
    });
    it('listas de usuarios', async() => {
        const res = await request(app)
            .get('/api/usuario/list')
            .set('token', token)
        expect(res.statusCode).toEqual(200)
    })

    it('agregar un nuevo usuarios', async() => {
        const res = await request(app)
            .post('/api/usuario/add')
            .set('token', token)
            .send({
                rol: 'Administrador',
                nombre: 'Nombre_prueba',
                password: 'micontraseña',
                email: 'prueba3@gmail.com',
                estado: 1
            })
        expect(res.statusCode).toEqual(200)
    })

    it('update usuario', async() => {
        const res = await request(app)
            .put('/api/usuario/update')
            .set('token', token)
            .send({
                nombre: 'nombre_update',
                rol: 'Administrador',
                password: 'micontraseña',
                email: 'admin@gmail.com',
                id: 1

            })
        expect(res.statusCode).toEqual(200)
    })

    it('deactivate usuario', async() => {
        const res = await request(app)
            .put('/api/usuario/activate')
            .set('token', token)
            .send({
                id: 1

            })
        expect(res.statusCode).toEqual(200)
    })

    it('activate usuario', async() => {
        const res = await request(app)
            .put('/api/usuario/deactivate')
            .set('token', token)
            .send({
                id: 1,
            })
        expect(res.statusCode).toEqual(200)
    })
})
