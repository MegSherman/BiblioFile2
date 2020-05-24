const express = require ('express')
const app = express ()
const collCtrl = require ('./controllers/collectionControllers')
const fullCtrl = require ('./controllers/fullArrayControllers.js')
const SERVER_PORT = 4001

app.use (express.json)

// Full Array Controllers
app.get ('./../../books.json', fullCtrl.searchForBook)

// Collection Controllers
app.get ('./../../books.json', collCtrl.displayCollection)
app.post ('./../../books.json', collCtrl.addBook)
app.put ('./../../books.json:book_id', collCtrl.changeLocation)
app.delete ('./../../books.json:book_id', collCtrl.deleteBook)

app.listen (SERVER_PORT, () => console.log (`Reading you like a book on port: ${SERVER_PORT}`)
)