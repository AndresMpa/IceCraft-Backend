//Middleware de autenticacion;
const tokenService = require("../services/token");

/*
 * Aquello que entra por parametro a next sera la vista a la que se redirige
 * al respectivo usuario dependiendo que rol posea este
 */

module.exports = {
  verifyUsuario: async (req, res, next) => {
    if (!req.headers.token) {
      return res.status(404).send({
        message: "No hay token con este registro",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol === "Administrador" || response.rol === "Cliente") {
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
        message: "No hay token con este registro",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol === "Administrador") {
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
        message: "No hay token con este registro",
      });
    }
    const response = await tokenService.decode(req.headers.token);
    if (response.rol === "Root") {
      next();
    } else {
      return res.status(403).send({
        message: "No autorizado",
      });
    }
  },
};
