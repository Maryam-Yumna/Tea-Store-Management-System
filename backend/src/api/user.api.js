const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');

module.exports = function () {
    router.post('/register', controller.register);
    router.get('/', controller.getAllUsers);
    router.get('/:id', controller.getUserByID);
    return router;    
}