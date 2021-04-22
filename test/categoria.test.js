const request = require('supertest')
const app = require('../index')

describe('Categoria Endpoints', () => {
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
    it('listas de categoria', async() => {
        const res = await request(app)
            .get('/api/categoria/list')
            .set('token', token)
        expect(res.statusCode).toEqual(200)
    })

    it('agregar un nuevo categoria', async() => {
        const res = await request(app)
            .post('/api/categoria/add')
            .set('token', token)
            .send({
                nombre: 'categirua_test',
                descripcion: 'lorem limpsus',
            })
        expect(res.statusCode).toEqual(200)
    })

    it('update categoria', async() => {
        const res = await request(app)
            .put('/api/categoria/update')
            .set('token', token)
            .send({
                nombre: 'articulo_test_update',
                descripcion: 'lorem limpsus update',
                codigo: '22225',
                id: 1

            })
        expect(res.statusCode).toEqual(200)
    })

    it('deactivate categoria', async() => {
        const res = await request(app)
            .put('/api/categoria/activate')
            .set('token', token)
            .send({
                id: 1

            })
        expect(res.statusCode).toEqual(200)
    })

    it('activate categoria', async() => {
        const res = await request(app)
            .put('/api/categoria/deactivate')
            .set('token', token)
            .send({
                id: 1,
            })
        expect(res.statusCode).toEqual(200)
    })
})