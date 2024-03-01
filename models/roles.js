const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "ROLES EXISTENTES"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "DESCRIPCION DE CADA ROL"
    }
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false,
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
