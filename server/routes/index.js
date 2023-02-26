var express = require('express');
var router = express.Router();
let indexController = require('../controller/index');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });

// router.get('/aboutus', function(req, res, next) {
//   res.render('about', { title: 'About us' });
// });

// router.get('/portfolio', function(req, res, next) {
//   res.render('portfolio', { title: 'Portfolio' });
// });

// router.get('/services', function(req, res, next) {
//   res.render('services', { title: 'Services' });
// });

// router.get('/contactus', function(req, res, next) {
//   res.render('contactus', { title: 'Contacts ' });
// });

// module.exports = router;

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/aboutus', indexController.displayAboutPage);

router.get('/portfolio', indexController.displayProductsPage);

router.get('/contactus', indexController.displayContactPage);

router.get('/services', indexController.displayServicesPage);


/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
