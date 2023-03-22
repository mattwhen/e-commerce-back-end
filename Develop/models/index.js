// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
}); 

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', 
})
// Products belongToMany Tags (through ProductTag)
// m to m relationship
Product.belongsToMany(Tag, { 
  through: ProductTag, 
  foreignKey: "product_id" 
}); // Product belongsToMany Tags through the junction table 'ProductTag'.

// Tags belongToMany Products (through ProductTag)
// m to m relationship
Tag.belongsToMany(Product, { 
  through: ProductTag,
  foreignKey: "tag_id"
}); // Tag belongsToMany Products through the junction table 'ProductTag'. 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
