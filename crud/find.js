require('../connection');

const User = require('../models/User');

const searchProducts = async () => {
    // search all products
    const products = await User.find({});
    
    console.log(products)
};

searchProducts();