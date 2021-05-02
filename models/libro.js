'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Libro.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    genero: DataTypes.BOOLEAN,
    numeroPagina: DataTypes.INTEGER,
    editorial: DataTypes.STRING,
    issn: DataTypes.STRING,
    idioma: DataTypes.STRING,
    fechaPublicacion: DataTypes.DATE,
    estado: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};