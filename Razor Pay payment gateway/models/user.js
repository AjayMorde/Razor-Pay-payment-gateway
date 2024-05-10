const Sequelize = require('sequelize');
const sequelize = require('../connections/database');

const Users = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,

    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    razorPayUser: Sequelize.BOOLEAN



});
module.exports = Users;