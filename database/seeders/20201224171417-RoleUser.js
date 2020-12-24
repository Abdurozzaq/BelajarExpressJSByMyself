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
    return queryInterface.bulkInsert('RoleUser', [
      {
        RoleId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RoleId: 2,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        RoleId: 2,
        UserId: 3,
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
