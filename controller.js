const bookList = []

let idTwo = 0

module.exports = {
addBookToList: (req, res) => {
    req.body.id2 = idTwo
    idTwo++
    console.log(req.body)
    bookList.push(req.body)
    console.log(bookList)
    res.status(200).send(`Book added!`)
},

getBookList: (req, res) => {
    res.status(200).send(bookList)
},

deleteBook: (req, res) => {
    
    console.log(req.params.id2)
    

    // let function1 = (elem) => {
    //     elem.
    //     elem.id2 === req.params.id2
    // }

    index = bookList.findIndex((elem) => {
        console.log(elem.id2)
        return elem.id2 === +req.params.id2
    })

    

    bookList.splice(index, 1)
    res.status(200).send(`Book Deleted!`);
    
    //console.log(bookList)
    
  
}

}

