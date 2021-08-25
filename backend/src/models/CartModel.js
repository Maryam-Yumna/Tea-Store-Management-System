const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema( {

    productName: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    photo: {
        type: String
    }
});

const Cart = mongoose.model("Cart" , cartSchema);

module.exports = Cart;