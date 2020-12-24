// import bycrypt
const bcrypt = require('bcrypt');
// import User model
const User = require('../../../models').User
// import jsonwebtoken
var jwt = require('jsonwebtoken');

module.exports = {
	/**
	 * Simple Controller that handle json as response
	 */
	signIn(req, res, next) {

    try {

      let { email, password } = req.body
      
      /**
       * Checking Password is it match with password hash on DB or not.
       * 
       * INFO : Email has been checked is it exist on DB or not, with Express-Validator
       */
      User.findOne({ where: { email: email } })
      .then(user => {
        // if theUser exist, then check the password
        bcrypt.compare(password, user.password, function(err, result) {

          if (result == true) {
            // if password match with DB, then signIn (jsonwebtoken)
            var token = jwt.sign({
              data: {
                email: email,
              }
            }, process.env.JWT_SECRET, { expiresIn: '30 days' });

            // FINAL/FINISH send the user the jwt token
            return res.status(200).send({
              email: req.body.email,
              accessToken: token,
              message: "You've been signed successfully",
              errors: null
            });

          } else {

            // if password not valid/not match return 401
            return res.status(401).send({
              email: req.body.email,
              accessToken: null,
              message: "Error",
              errors: {
                msg: 'Invalid Password!'
              },
              test: theUser
            });
          }
        }); // end of bycrypt

      }).catch(err => {
				res.status(403).json({ 
          accessToken: null,
          message: "Error",
          errors: {
            msg: "User not found with that email!"
          }
        });
			}); // end of findOne
      
   } catch(err) {
     return next(err)
   }

		
	}

}