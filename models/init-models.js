var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _inventory_movements = require("./inventory_movements");
var _products = require("./products");
var _roles = require("./roles");
var _suppliers = require("./suppliers");
var _users = require("./users");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var inventory_movements = _inventory_movements(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(categories, { as: "category", foreignKey: "categories_id"});
  categories.hasMany(products, { as: "products", foreignKey: "categories_id"});
  inventory_movements.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(inventory_movements, { as: "inventory_movements", foreignKey: "product_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  products.belongsTo(suppliers, { as: "supplier", foreignKey: "suppliers_id"});
  suppliers.hasMany(products, { as: "products", foreignKey: "suppliers_id"});
  inventory_movements.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(inventory_movements, { as: "inventory_movements", foreignKey: "user_id"});
  products.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(products, { as: "products", foreignKey: "user_id"});
  suppliers.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(suppliers, { as: "suppliers", foreignKey: "user_id"});

  return {
    categories,
    inventory_movements,
    products,
    roles,
    suppliers,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
