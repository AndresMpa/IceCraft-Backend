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
      dni: DataTypes.INTEGER(10),
      nombre: DataTypes.STRING(50),
      apellidos: DataTypes.STRING(50),
      fechaNacimiento: DataTypes.DATE,
      lugarNacimiento: DataTypes.STRING(50),
      correo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      genero: DataTypes.BOOLEAN,
      direccion: DataTypes.STRING(50),
      temaLiterario: DataTypes.STRING(50),
      tipo: DataTypes.INTEGER(3),
      usuario: DataTypes.STRING(50),
      password: DataTypes.STRING(50),
      imagenPerfil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
