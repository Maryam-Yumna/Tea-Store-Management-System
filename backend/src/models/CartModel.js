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
    },
    //User's token
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Cart = mongoose.model("Cart" , cartSchema);

module.exports = Cart;