const express = require('express');
const router = express.Router();
const controller = require('../controller/expense.controller');

module.exports = function () {
    router.post('/newExpense', controller.addNewExpense);
    router.get('/', controller.getAllExpenses);
    router.get('/getbyid/:id', controller.getExpenseByID);
    router.get('/expenseForMonth/:firstDate/:lastDate', controller.getExpenseForMonth);
    router.put('/updateExpense', controller.updateExpense);

    return router;    
}