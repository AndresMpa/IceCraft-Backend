const request = require('supertest')
const app = require('../index')

describe('Articulos Endpoints', () => {
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
                console.log(token)
                done();
            });
    });
    it('listas de articulos', async() => {
        const res = await request(app)
            .get('/api/articulo/list')
        expect(res.statusCode).toEqual(200)

    })

    it('agregar un nuevo articulo', async() => {
        const res = await request(app)
            .post('/api/articulo/add')
            .set('token', token)
            .send({
                nombre: 'articulo_test',
                descripcion: 'lorem limpsus',
                codigo: '2222',
                precio_venta: 2525,
                stock: 25,
                categoriaId: 1,

            })
        expect(res.statusCode).toEqual(200)
    })

    it('update articulo', async() => {
        const res = await request(app)
            .put('/api/articulo/update')
            .set('token', token)
            .send({
                nombre: 'articulo_test_update',
                descripcion: 'lorem limpsus update',
                codigo: '22225',
                id: 1

            })
        expect(res.statusCode).toEqual(200)
    })

    it('activate articulo', async() => {
        const res = await request(app)
            .put('/api/articulo/activate')
            .set('token', token)
            .send({
                id: 1

            })
        expect(res.statusCode).toEqual(200)
    })

    it('deactivate articulo', async() => {
        const res = await request(app)
            .put('/api/articulo/deactivate')
            .set('token', token)
            .send({
                id: 1,
            })
        expect(res.statusCode).toEqual(200)
    })
})