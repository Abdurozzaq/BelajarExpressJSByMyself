'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: false,
        allowNull: false
      },
      email_verified_at: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      password: { 
        type: Sequelize.STRING,
        defaultValue: false,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};