const db = require("../models");
const bcrypt = require("bcryptjs");
const tokenService = require("../services/token.js");

module.exports = {
  createAccount: async (req, res, next) => {
    try {
      console.log(req.body.password);
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const reg = await db.Usuario.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },
  signin: async (req, res, next) => {
    try {
      let user = await db.Usuario.findOne({
        where: { usuario: req.body.usuario },
      });
      if (user) {
        console.log("El usuario es: " + user);
        console.log("Req: " + req.body.password + "\nPassword: " + user.password)
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        console.log(passwordIsValid);
        if (passwordIsValid) {
          let tokenReturn = await tokenService.encode(user);
          res.status(200).send({ auth: true, tokenReturn });
        } else {
          res
            .status(401)
            .send({
              auth: false,
              accessToken: null,
              reason: "Clave incorrecta",
            });
        }
      } else {
        res.status(404).send("No se encontro el usuario.");
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error " + e,
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const reg = await db.Usuario.create(req.body);
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
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
        message: "Ocurrio un error " + e,
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      req.body.Password = bcrypt.hashSync(req.body.Password, 8);
      const reg = await db.Usuario.update(
        {
          nombre: req.body.nombre,
          descripcion: req.body.descripcion,
          profile: req.body.profile,
          avatar: req.body.avatar,
        },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      const reg = await db.Usuario.update(
        { estado: 1 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e)
    }
  },
  deactivate: async (req, res, next) => {
    try {
      const reg = await db.Usuario.update(
        { estado: 0 },
        { where: { id: req.body.id } }
      );
      res.status(200).json(reg);
    } catch (e) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(e);
    }
  },
};
