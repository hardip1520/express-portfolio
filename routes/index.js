var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('about', { title: 'About us' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Contacts ' });
});

module.exports = router;
