class DataNotProvided extends Error {
    constructor () {
        super('No data was inputed for the update')
        this.name = 'DataNotProvided'
        this.idErro = 2
    }
}

module.exports = DataNotProvided