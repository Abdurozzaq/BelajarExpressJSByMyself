'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
  };
  User.init({
		firstName: { 
			type: DataTypes.STRING,
			defaultValue: false,
			allowNull: false
		},
		lastName: { 
			type: DataTypes.STRING,
			defaultValue: false,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			defaultValue: false,
			allowNull: false
		},
		email_verified_at: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		password: { 
			type: DataTypes.STRING,
			defaultValue: false,
			allowNull: false
		},
		role: { 
			type: DataTypes.STRING,
			defaultValue: false,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'User',
	});
  return User;
};