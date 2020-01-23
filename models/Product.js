const { Schema, model } = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const productSchema = new Schema({
    name: String,
    description: String,
    price: {
        type: Number,
        default: 0
    }
});

module.exports = model('Product', productSchema);