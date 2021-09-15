const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');
const auth = require('../../middleware/auth');

module.exports = function () {
    router.post('/register', controller.register);
    router.get('/', controller.getAllUsers);
    router.get('/:id', controller.getUserByID);
    router.delete('/',auth, controller.deleteUser);
    return router;    
}