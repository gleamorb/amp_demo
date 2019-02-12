var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(process.cwd() + '/html/login.html');
});

module.exports = router;