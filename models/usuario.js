"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init(
    {
      DNI: DataTypes.INTEGER(10),
      Nombre: DataTypes.STRING(50),
      Apellidos: DataTypes.STRING(50),
      FechaNacimiento: DataTypes.DATE,
      LugarNacimiento: DataTypes.STRING(50),
      Correo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      Genero: DataTypes.BOOLEAN,
      Direccion: DataTypes.STRING(50),
      TemaLiterario: DataTypes.STRING(50),
      Tipo: DataTypes.INTEGER(3),
      Usuario: DataTypes.STRING(50),
      password: DataTypes.STRING(50),
      ImagenPerfil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
