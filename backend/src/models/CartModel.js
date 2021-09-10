const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema( {

    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    count: {
        type: Number
        //required: true
    }
});

const Cart = mongoose.model("Cart" , cartSchema);

module.exports = Cart;