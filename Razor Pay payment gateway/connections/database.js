const Sequelize = require('sequelize');
const sequelize = new Sequelize('RazorPay', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize;