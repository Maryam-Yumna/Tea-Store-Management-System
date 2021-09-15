const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const deletedUserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    userType: {
        type: String,
        required:true,
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
    registeredDate:{
        type: Date,
        required: true
    },
    reason:{
        type: String,
        required: true,
    },
    deletedDate:{
        type: Date,
        default: Date.now(),
    }
});

const DeletedUser = mongoose.model('DeletedUser',deletedUserSchema);

module.exports = DeletedUser;