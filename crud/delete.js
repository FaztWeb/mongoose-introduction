require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    // const deletedProduct = await Product.deleteOne({name: 'laptop hp'});
    // const result = await Product.deleteMany({name: 'laptop hp'});
    // const result = await Product.findOneAndDeletmousee({name: 'mouse'});
    const result = await Product.findByIdAndDelete('5e290e03a1def223dc11c70d');
    

    console.log(result);

};

someFunction();