const Products = require ("./products");

const init = async()=>{
    await Products.sync({alter: true})
};

module.exports = { init, Products};