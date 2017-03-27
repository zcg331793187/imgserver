var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  // res.send('respond with a resource');

  var json=[{a:1,b:2,c:3}];

  res.send(json);
});
router.get('/id/:id', function(req, res) {
  res.send('user ' + req.params.id);
});
module.exports = router;
