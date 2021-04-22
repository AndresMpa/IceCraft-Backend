var jwt = require("jsonwebtoken");
const models = require("../models");

module.exports = {
  //generar el token
  encode: async (user) => {
    const token = jwt.sign(
      {
        id: user.DNI,
        nombre: user.Nombre,
        apellido: user.Apellido,
        fecha_nacimiento: user.FechaNacimiento,
        lugar_nacimiento: user.LugarNacimiento,
        correo: user.Correo,
        genero: user.Genero,
        direccion: user.Direccion,
        temas: user.TemaLiterario,
        tipo: user.Tipo,
        user: user.Usuario,
        password: user.Password,
        profile: user.ImagenPerfil,
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
