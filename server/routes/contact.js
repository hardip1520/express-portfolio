let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
//connect to our books model
let Contact = require('../models/contacts');
let contactController = require('../controller/contact');
//GET ROUTE for the book list page -READ OPERATION
router.get('/', contactController.displayContactList);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', requireAuth,contactController.displayAddContact);

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add',requireAuth,contactController.processAddContact );

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', requireAuth,contactController.displayEditContact);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth,contactController.processEditContact);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth,contactController.performDelete);

module.exports = router;