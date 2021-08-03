class InvalidField extends Error {
    constructor (field) {
        const message = `The ${field} field is invalid`
        super(message)
        this.name = 'InvalidField'
        this.idErro = 3
    }
}

module.exports = InvalidField