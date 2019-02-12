var express = require('express');
var router = express.Router();

router.post('/', function(req, res){

    res.setHeader('AMP-Access-Control-Allow-Source-Origin','http://localhost:3000');
//    res.sendFile(process.cwd() + '/html/list.html');
    res.json(req.params);
});

module.exports = router;