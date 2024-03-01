const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "NOMBRE DEL USUARIO"
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "APELLIDO DEL USUARIO"
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "FOTO DE PERFIL"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "CORREO DEL USUARIO"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "CONTRASEÑA DEL USUARIO"
    },
    phone_number: {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "NUMERO DEL USUARIO"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "ESTA ACTIVO EL USUARIO"
    },
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "ROL DEL USUARIO",
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "fk_users_role_id",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
