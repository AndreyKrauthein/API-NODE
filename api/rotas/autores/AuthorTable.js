const Modelo = require('../../database/createTables')
const NotFound = require('../../errors/NotFound')

module.exports = {
    insertAuthor (author) {
        return Modelo.create(author)
    },

    listAuthors () {
        return Modelo.findAll({raw: true})
    },

    async idSearch(id) {
        const authorFound = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!authorFound) {
            throw new NotFound('Autor')
        }

        return authorFound
    },

    update (id, updateData) {
        return Modelo.update(
            updateData,
            {
                where: {id: id}
            }
        )
    },

    remove (id) {
        return Modelo.destroy({
            where: {id: id}
        })
    }
}