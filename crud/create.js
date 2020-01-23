require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {

    const laptopone = new Product({
        name: 'laptop hp',
        description: 'hp pavilion 15'
    });
    await laptopone.save();

    const laptopTwo = new Product({
        name: 'laptop hp',
        description: 'laptop hp oment'
    });
    await laptopTwo.save();

    const laptopThree = new Product({
        name: 'mouse',
        description: 'some mouse brand'
    })
    await laptopThree.save();


    const products = await Product.find({name: 'laptop hp'});
    console.log(products)

};

someFunction();