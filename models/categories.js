const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "ID DE CATEGORIAS"
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "IMAGEN DE LA CATEGORIA"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "NOMBRE DE LA CATEGORIA"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "DESCRIPCION SOBRE CATEGORIAS"
    }
  }, {
    sequelize,
    tableName: 'categories',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
