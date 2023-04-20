const express = require("express");

const app = express();

const cors = require('cors');

app.use(cors())

app.use(express.json());

app.use(express.static('public'))

const baseURL = 'server.js'

const {addBookToList, getBookList, deleteBook} = require('./controller')

app.post(`/${baseURL}/bookList`, addBookToList)

app.get(`/${baseURL}/bookList`, getBookList)

app.delete(`/${baseURL}/bookList/:id2`, deleteBook)

app.listen(4000, () => {
    console.log(`Listening on 4000`);
  });
  