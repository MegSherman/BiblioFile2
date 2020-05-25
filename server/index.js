const express = require ('express')
const app = express ()
const ctrl = require ('./controller')
const SERVER_PORT = 4001

app.use (express.json())


// Controller Endpoints
app.get ('/api/collection', ctrl.getLibrary)
app.post ('/api/collection', ctrl.addBook)
app.put ('/api/collection/:book_id', ctrl.editBook)
app.delete ('/api/collection/:book_id', ctrl.deleteBook)

app.listen (SERVER_PORT, () => console.log (`Reading you like a book on port: ${SERVER_PORT}`)
)