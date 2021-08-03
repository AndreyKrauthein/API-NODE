const AuthorTable = require('./AuthorTable')
const InvalidField = require('../../errors/InvalidField')
const DataNotProvided = require('../../errors/DataNotProvided')

class Author {
    constructor ({id, name, genre, members}) {
        this.id = id
        this.name = name
        this.genre = genre
        this.members = members
    }

    async create () {
        this.validate()
        const result = await AuthorTable.insertAuthor({
            name: this.name,
            genre: this.genre,
            members: this.members
        })
        return result
    }

    async loadAuthor () {
        const AuthorFound = await AuthorTable.idSearch(this.id)
        this.name = AuthorFound.name
        this.genre = AuthorFound.genre
        this.members = AuthorFound.members
    }

    async update () {
        await AuthorTable.idSearch(this.id)
        const fields = ['name','genre','members']
        const updateData = {}

        fields.forEach((field) => {
            const value = this[field]
            if (typeof value === 'string' && value.length > 0){
                updateData[field] = value
            }
        })

        if (Object.keys(updateData).length === 0){
            throw new DataNotProvided()
        }

        await AuthorTable.update(this.id, updateData)
    }

    remove () {
        return AuthorTable.remove(this.id)
    }

    validate() {
        const fields = ['name','genre']

        fields.forEach(field => {
            const value = this[field]

            if (typeof value !== 'string' || value.length === 0){
                throw new InvalidField(field)
            }
        })
    }
    
}

module.exports = Author