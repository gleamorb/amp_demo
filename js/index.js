var express = require('express');
var router = express.Router();

// ルーターセット
router.use('/login', require('./login.js'));
router.use('/confirm', require('./confirm.js'));

module.exports = router;

