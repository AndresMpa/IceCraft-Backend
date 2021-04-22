const models = require('../models');

module.exports = {
    add: async (req, res, next) => {
        try {
            const reg = await models.Compra.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Compra.findOne({ 
                where: { id: req.query.id },
                include: [
                    {
                        model: models.Articulo,
                        as: 'articulo'
                    },
                    {
                        model: models.Usuario,
                        as: 'usuario'
                    }
                ]
            });
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            const reg = await models.Compra.findAll({
                include: [
                    {
                        model: models.Articulo,
                        as: 'articulo'
                    },
                    {
                        model: models.Usuario,
                        as: 'usuario'
                    }
                ]
            });
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
            const reg = await models.Compra.update({
                cantidad: req.body.cantidad, 
                descripcion: req.body.descripcion,
                articuloId: req.body.articuloId,
                usuarioId: req.body.usuarioId
            }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}
