const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('email')
    .not()
    .isEmpty()
    .withMessage('Email is Required!')
    .isEmail()
    .withMessage('Email is not Valid!'),
  check('password')
    .not()
    .isEmpty()
    .withMessage('Password is Required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];