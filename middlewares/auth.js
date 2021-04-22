//Middleware de autenticacion;
const tokenService = require("../services/token");

// Nota los tipo corresponden a los roles de los diferentes
// usuarios de la plataforma establacido como:

//* Root (3)
//* Administrador (2)
//* Cliente (1)

module.exports = {
  verifyUsuario: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (
      response.tipo === "1" ||
      response.tipo === "2" ||
      response.tipo === "3"
    ) {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyCliente: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.tipo === "1") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyAdministrador: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.tipo === "2") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
  verifyRoot: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No token",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.tipo === "3") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
};

