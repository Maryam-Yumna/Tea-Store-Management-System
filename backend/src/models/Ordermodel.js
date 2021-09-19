const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    orderdate:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    
    },
    phone: {
        type: String
    },
    address:{
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },

      qty: {
        type: String,
        required: true,
      },

    total:{
        type: String,
      
    },

    paymentMethod:{
        type: String
    },
    deliveryMethod:{
        type: String
    },

    paymentStatus:{
        type: String
    },

    deliveryStatus:{
        type: String
    },
    

});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
