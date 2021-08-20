const express = require('express');
const router = express.Router();
const controller = require('../controller/expense.controller');

module.exports = function () {
    router.post('/newExpense', controller.addNewExpense);
    router.get('/', controller.getAllExpenses);
    router.get('/:id', controller.getExpenseByID);
    router.put('/updateExpense', controller.updateExpense);

    return router;    
}