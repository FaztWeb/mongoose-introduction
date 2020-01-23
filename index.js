require('./connection');

// using the model 
const product = require('./models/product');

// creating a new document base on the model
const product = new product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th generation',
    price: '1300.99'
});

console.log('created product', product)

// saving the created document
product.save((err, document) => {
    if (err) console.log(err);
    console.log('saved:', document);
});