const models = require("../models");

module.exports = {
  add: async (req, res, next) => {
    try {
      const reg = await models.Libro.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  query: async (req, res, next) => {
    try {
      const reg = await models.Libro.findOne({
        where: { id: req.query.id },
        include: [
          {
            model: models.Categoria,
            as: "categoria",
          },
        ],
      });
      if (!reg) {
        res.status(404).send({
          message: "El registro no existe",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await models.Libro.findAll();
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  remove: async (req, res, next) => {
    try {
      const reg = await models.Libro.destroy({
        where: {
          id: req.body.id,
        },
      });
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      const reg = await models.Libro.update(
        {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
        },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await models.Libro.update(
        { estado: 1 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await models.Libro.update(
        { estado: 0 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
