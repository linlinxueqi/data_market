var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/test', function(req, res, next) {
  res.render('test');
});
router.get('/gallery', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('index');
});

router.get('/home', function(req, res, next) {
  res.render('index');
});

router.get('/contact', function(req, res, next) {
  res.render('index');
});


module.exports = router;
