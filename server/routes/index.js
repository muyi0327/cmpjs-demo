var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/user/attention', function (req, res, next) {
  var data = Mock.mock(Mock.mock('@integer(0, 3)'));

  res.json(data);
});

module.exports = router;
