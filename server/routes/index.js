var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.headers);
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');
  res.send('<html><body><h1>This is an Express Server</h1></body></html>');
});

module.exports = router;
