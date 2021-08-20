const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const expenseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: false
    },
    description:{
        type: String,
        required: true
    },
    paymentDate: {
        type: Date,
        required:true
    },
    recordDate: {
        type: Date,
        default: Date.now(),
    }
});

const Expense = mongoose.model('Expense',expenseSchema);

module.exports = Expense;