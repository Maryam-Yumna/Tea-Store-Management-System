const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: true
    },
    userType: {
        type: String,
        required:true,
        default: "customer"
    },
    email: {
        type: String,
        required: true,
        unique: true
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
        default: Date.now(),
    }
});

//method to generate encrypted password
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
//validate the encrypted password
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
const User = mongoose.model('User',userSchema);

module.exports = User;