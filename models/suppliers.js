const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "NOMBRE DE PROVEEDOR"
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "TELEFONO RESPONSABLE DEL PROVEEDOR"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "CORREO DE CONTACTO CON EL PROVEEDOR"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'suppliers',
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
      {
        name: "fk_suppliers_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
