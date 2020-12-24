const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('firstName')
    .not()
    .isEmpty()
    .withMessage('First Name is Required!'),
  check('lastName')
    .not()
    .isEmpty()
    .withMessage('Last Name is Required!'),
  check('roleId')
    .not()
    .isEmpty()
    .withMessage('Role ID is Required! But, Be careful.')
    .isNumeric()
    .withMessage('Only Decimals allowed'),
  check('email')
    .not()
    .isEmpty()
    .withMessage('Email is Required!')
    .isEmail()
    .withMessage('Email is not Valid!'),
  check('password')
    .not()
    .isEmpty()
    .withMessage('Password is Required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 character/number.'),
  check('confirm_password')
    .not()
    .isEmpty()
    .withMessage('Confirm password is required.')
    .matches('password')
    .withMessage('Passwords must match.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];