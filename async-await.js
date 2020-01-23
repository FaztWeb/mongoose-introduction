require('./connection');

const Product = require('./models/Product')

async function main() {
    const product  = new Product({
        name: 'Keyboard',
        description: 'Coursair K68 RGB Game Keyboard',
        price: '150'
    });
    const productSaved = await product.save();
    return productSaved;
}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err));