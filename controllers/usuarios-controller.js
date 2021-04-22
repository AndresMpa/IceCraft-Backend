const db = require('../models');
const bcrypt = require('bcryptjs');
const tokenService = require('../services/token.js')

module.exports = {
    signin: async (req, res, next) => {
        try {
            let user = await db.Usuario.findOne({ where: { Correo: req.body.Correo} })
            if (user) {
                let passwordIsValid = bcrypt.compareSync(req.body.Password, user.Password);
                if (passwordIsValid) {
                    let tokenReturn = await tokenService.encode(user);
                    res.status(200).send({ auth: true, tokenReturn});
                } else {
                    res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
                }
            } else {
                res.status(404).send('User Not Found.');
            }
        } catch (error) {
            res.status(500).send({
                message: 'Error' + error
            });
            next(error);
        }
    },
    add: async (req, res, next) => {
        try {
            req.body.Password = bcrypt.hashSync(req.body.Password, 8)
            const reg = await db.Usuario.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            const reg = await db.Usuario.findAll();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try {
            req.body.Password = bcrypt.hashSync(req.body.Password, 8)
            const reg = await db.Usuario.update({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                profile: req.body.profile,
                avatar: req.body.avatar
            }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await db.Usuario.update({ estado: 1 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await db.Usuario.update({ estado: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
};
