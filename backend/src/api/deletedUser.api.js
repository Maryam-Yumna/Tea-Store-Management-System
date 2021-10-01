const express = require('express');
const router = express.Router();
const controller = require('../controller/deletedUser.controller');
const auth = require('../../middleware/auth');

module.exports = function () {
    router.post('/save', controller.save);
    return router;    
}