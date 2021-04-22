const request = require('supertest')
const app = require('../index')
describe('login Endpoints', () => {
    it('login user', async() => {
        const res = await request(app)
            .post('/api/usuario/login')
            .send({
                email: 'admin@gmail.com',
                password: 'micontraseña',

            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('tokenReturn');
    })

    it('can not login user with invalid password', async() => {
        const res = await request(app)
            .post('/api/usuario/login')
            .send({
                email: 'admin@gmail.com',
                password: 'micontraseñaa',

            })
        expect(res.statusCode).toEqual(401)
    })

    it('can not login user with invalid username', async() => {
        const res = await request(app)
            .post('/api/usuario/login')
            .send({
                email: 'prueb@gmail.com',
                password: 'micontraseña',

            })
        expect(res.statusCode).toEqual(404)
    })
})