var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');

/**
 * Importing Controllers
 */
const home = require('../app/controllers/HomeController.js');
const signInController = require('../app/controllers/api/auth/SignInController.js');


/**
 * Importing Middlewares 
 */
const logMiddleware = require('../app/middlewares/logMiddleware.js');

/**
 * Importing Request Validator
 */
const signInValidator = require('../app/requestValidator/api/auth/SignInRequestValidator.js');

/**
 * Define route with separate controller
 */
router.get('/', home.home);

/**
 * Define Route without separate controller
 */
router.get('/about', function(req, res) {
  res.send('About us');
});


/**
 * Define route with :
 * 1. separate controller
 * 2. separate middleware
 * 3. multiple middleware
 */
router.route('/ggcuy')
  .all([
    logMiddleware.logMiddlewareWorks,
    logMiddleware.logMiddlewareNotice
  ])
  .get(home.home);


/**
 * Connecting To Database
 */
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

/**
 * Sign In Route
 */
router.post('/signin', signInValidator.validateUser, signInController.signIn);


module.exports = router;