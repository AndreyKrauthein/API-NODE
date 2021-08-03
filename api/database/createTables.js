const Sequelize = require('sequelize')
const connection = require('./database.js')

const columns = connection.define("authors", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNulls: false
    }, 
    members: {
        type: Sequelize.STRING,
        allowNulls: null
    }
})

const options = {
    freezeTableName: true,
    // congela o nome da tablea
    tableName: 'authors',
    timestamps: false
}

columns.sync({force: false}).then(() => {})
module.exports = columns