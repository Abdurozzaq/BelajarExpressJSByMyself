const bcrypt = require('bcrypt');
const saltRounds = 10;
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@example.com',
        password: bcrypt.hashSync('password', saltRounds),
        email_verified_at: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mike',
        lastName: 'Doe',
        email: 'Mike@example.com',
        password: bcrypt.hashSync('password', saltRounds),
        email_verified_at: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ozzaq',
        lastName: 'Doe',
        email: 'Ozzaq@example.com',
        password: bcrypt.hashSync('password', saltRounds),
        email_verified_at: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
