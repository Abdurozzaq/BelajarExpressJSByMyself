const express = require('express')
var bodyParser = require('body-parser')

// Express Validator
// const expressValidator = require('express-validator')
// DotENV
require('dotenv').config()
// Routes
var apiRoutes = require('./routes/api.js');


const app = express()
const port = process.env.NODE_PORT;

/**
 * Body Parser Configuration
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Using Express Validator
// app.use(expressValidator())

/**
 * Synchronize Sequelize Models
 */
var models = require("./app/models");

models.sequelize.sync().then(function() {
  console.log('Nice! Database Looks Fine');
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!");
})

/**
 * Routes
 */
// Api Route
app.use('/api/', apiRoutes);

// 404 Route
app.get('*', (req, res) => res.status(200).send({
  message: "404 - Page Not Found!"
}));


/**
 * Serving 
 */
app.listen(port, () => {
  console.log(`The express is listening at http://localhost:${port}`)
})