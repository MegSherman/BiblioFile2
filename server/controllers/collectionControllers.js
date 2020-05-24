const books = [{ id: 0, title: 'Born of Metal', author: 'Meg Sherman', location: '', image: ''}]
let id = 1

module.exports = {
    // displayCollection: (req, res) => {},
    addBook: (req, res) => {
        const {title, author, location, image} = req.body
        const newBook = {id, title, author, location, image}
        books.push (newBook)
        id++
        res.status(200).send(books)
    },
    
    changeLocation: (req, res) => {
        const {book_id} = req.params
        const {newLocation} = req.body
        const index = books.findIndex (e => e.id === +book_id)
        
        if (index === -1) {
            return res.status(404).send ('Book not found')
        }
        books[index].location = newLocation
        res.status(200).send(books)
    },
    
    deleteBook: (req, res) => {
        const {book_id} = req.params

        if (index === -1) {
            return.status(404).send ('Book not found')
        }

        books.splice (index, 1)
        res.status(200).send(books)
    }
}