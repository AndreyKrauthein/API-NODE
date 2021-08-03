class NotFound extends Error {
    constructor(name) {
        super(`${name} was not found`)
        this.name = 'NotFound'
        this.idErro = 2 
    }
}

module.exports = NotFound