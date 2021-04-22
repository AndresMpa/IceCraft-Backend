'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'usuarioId', as: 'usuario'});
      this.belongsTo(models.Articulo, { foreignKey: 'articuloId', as: 'articulo'});
    }
  };
  Compra.init({
    descripcion: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    articuloId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};