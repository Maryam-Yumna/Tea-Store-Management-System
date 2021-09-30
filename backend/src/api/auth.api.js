const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller');
const auth = require('../../middleware/auth');

module.exports = function () {
    router.post('/login', controller.login);
    router.get('/loggedUser',auth, controller.getLoggedUser);
    router.put('/updateUser',auth, controller.updateUser);
    return router;    
}