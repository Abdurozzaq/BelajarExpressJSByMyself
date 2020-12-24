// import User model
const User = require('../models').User
const Role = require('../models').Role

module.exports = {

  /**
   * Simple Controller that handle json as response
   */
  home(req, res) {

    User.findOne({ 
      where: { 
        email: 'UserOne@example.com' 
      },
      include: [
        {
          model: Role,
        },
      ],
    }).then(user => { 
      res.send(user);
    });

  }
}