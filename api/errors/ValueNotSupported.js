class ValueNotSupported extends Error {
    constructor (contentType) {
        super(`The value type ${contentType} is not supported`)
        this.name = 'ValueNotSupported'
        this.idErro = 1
    }
}

module.exports = ValueNotSupported