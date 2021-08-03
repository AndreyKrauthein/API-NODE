const Sequelize = require('sequelize')

const connection = new Sequelize('loja_discos','root','', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection