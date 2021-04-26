var jwt = require("jsonwebtoken");
const models = require("../models");

module.exports = {
  //generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        id: user.dni,
        nombre: user.nombre,
        apellido: user.apellido,
        fecha_nacimiento: user.fechaNacimiento,
        lugar_nacimiento: user.lugarNacimiento,
        correo: user.correo,
        genero: user.genero,
        direccion: user.direccion,
        temas: user.Temaliterario,
        tipo: user.tipo,
        user: user.usuario,
        password: user.password,
        profile: user.imagenPerfil,
      },
      "config.secret",
      {
        expiresIn: 3600,
      }
    );
    return token;
  },
  //permite decodificar el token
  decode: async (token) => {
    try {
      let { id } = await jwt.verify(token, "config.secret");
      let Usuario = await models.Usuario.findOne({
        where: {
          id: id,
        },
      });
      if (Usuario) {
        return Usuario;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  },
};
