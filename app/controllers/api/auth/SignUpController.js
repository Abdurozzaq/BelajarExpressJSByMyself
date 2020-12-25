// import User model
const User = require('../../../models').User
// import bycrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

// The Controller
module.exports = {
  signUp(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then(user => { 
        // check is email is already in use
        if (user) {
          res.status(422).json({ 
            accessToken: null,
            message: "Error",
            errors: {
              msg: "Email is already in use!"
            }
          });
        } 

        if (!user) {
          User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, saltRounds),
          }).then((user) => {
            user.addRole(req.body.roleId);
  
            return res.status(200).json({ 
              message: "You've been successfully registered!",
              errors: null
            });
          }).catch((err) => {
            next(err)
          });
        }

      }) // end of findOne
  } // end of signUp Controller
}