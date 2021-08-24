const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const itemSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true
    },

    availability:{
        type:String,
       
    },

    quantity:{
        type:Number,
       
    },

    photo: {
        type: String,
       
    },

    deliverywithin: {
        type: String,
     
    }
})
const Product = mongoose.model('Product', itemSchema);
module.exports = Product ;