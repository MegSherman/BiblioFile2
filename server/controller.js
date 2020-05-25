let collection = require ('./../data.json')
const books = [{id: 0, title: 'Born of Metal', author: 'Meg Sherman', location: 'desk', image: ''}]
let id = 23

module.exports = {

    getCollection: (req, res) => {
        const {search} = req.query
        console.log (search)

        if (search) {
            let returnedBook = collection.filter (e => e.title.includes(search))
            return res.status(200).send (returnedBook)
        } else if (location) {
            let locationArray = collection.filter (e => e.location.includes(location))
            return res.status(200).send (locationArray)
        }
        res.status(200).send(collection)
    },

    getBook: (req, res) => {
        const {title} = req.body
        const index = collection.map (e => e.title = title)

        if (index === null) {
            return res.status(404).send ('Book not found')
        }
        res.status(200).send(collection[index])
    },
    
    addBook: (req, res) => {
        const {title, author, location, image} = req.body
        const newBook = {id, title, author, location, image}
        collection.push (newBook)
        id++
        res.status(200).send(collection)
    },

    editLocation: (req, res) => {
        const {book_id} = req.params
        const {newLocation} = req.body
        const index = collection.findIndex (e => e.id === +book_id)
        
        if (index === -1) {
            return res.status(404).send ('Book not found')
        }
        collection[index].location = newLocation
        res.status(200).send(collection)
    },

    deleteBook: (req, res) => {
        const {book_id} = req.params
        const index = collection.findIndex((e) => e.id === +book_id)

        if (index === -1) {
            return res.status(404).send ('Book not found')
        }
        collection.splice (index, 1)
        res.status(200).send(collection)
    }
}