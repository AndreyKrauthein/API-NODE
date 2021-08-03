const router = require('express').Router()
const AuthorTable = require('./AuthorTable')
const Author = require('./Author')
const AuthorSerializer = require('../../Serializer').AuthorSerializer

// OPTIONS 
router.options('/', (req,res) => {
    res.set('Access-Control-Allow-Methods', 'GET', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

// GET 
router.get('/', async (req, res) => {
    const result = await AuthorTable.listAuthors()
    res.status(200)
    res.send(JSON.stringify(result))
}) 

// POST 
router.post('/', async (req, res, next) => {
    try {
        const reqData = req.body
        const author = new Author(reqData)
        result = await author.create()
        res.status(201)
        res.send(result)
    } catch (error) {
        next(error)
    }
})

// OPTIONS /
router.options('/:authorId', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET', 'PUT', 'DELETE')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

// GET ID
router.get('/:authorId', async (req, res, next) => {
    try {
        const id = req.params.authorId
        const author = new Author({ id: id}) 
        await author.loadAuthor()
        res.status(200)
        res.send(JSON.stringify(author))
    } catch (error) {
        next(error)
    }
})

// PUT 
router.put('/:authorId', async (req, res, next) => {
    try {
        const id = req.params.authorId
        const bodyData = req.body
        const fullData = Object.assign({}, bodyData, {id: id})
        // Getting the ID and Body data together 
        const author = new Author(fullData)
        await author.update()
        res.status(204)
        res.end()
    } catch (error) {
        next(error)
    }
})

// DELETE
router.delete('/:authorId', async (req, res, next) => {
    try {
        const id = req.params.authorId
        const author = new Author({id: id})
        await author.loadAuthor()
        await author.remove()
        res.status(204)
        res.end()
    } catch (erro) {
        next(erro)
    }
})

module.exports = router