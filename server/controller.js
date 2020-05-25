const collection = require ('../data.json')
const books = [{id: 0, title: 'Born of Metal', author: 'Meg Sherman', location: 'desk', image: ''}]
let id = 1

module.exports = {

    getLibrary: (req, res) => {
        res.status(200).send(collection)
    },
    
    addBook: (req, res) => {
        const {title, author, location, image} = req.body
    },

    editBook: (req, res) => {
        const {book_id} = req.params
        const {newLocation} = req.body
        const index = books.findIndex (e => e.id === +book_id)
        
        if (index === -1) {
            return res.status(404).send ('Book not found')
        }
        collection[index].location = newLocation
        res.status(200).send(collection)
    },

    deleteBook: (req, res) => {
        const {book_id} = req.params

        if (index === -1) {
            return res.status(404).send ('Book not found')
        }
        collection.splice (index, 1)
        res.status(200).send(collection)
    }
}