const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "NOMBRE DEL PRODUCTO"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "DESCRIPCION DEL PRODUCTO"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "CANTIDAD DEL PRODUCTO"
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "ESTADO DEL PRODUCTO"
    },
    categories_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "FK CATEGORIAS",
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    suppliers_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "FK PROVEEDOR",
      references: {
        model: 'suppliers',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "USUARIO QUE CREO EL PRODUCTO",
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
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
        name: "fk_products_user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "fk_products_suppliers_id",
        using: "BTREE",
        fields: [
          { name: "suppliers_id" },
        ]
      },
      {
        name: "fk_products_categories_id",
        using: "BTREE",
        fields: [
          { name: "categories_id" },
        ]
      },
    ]
  });
};
