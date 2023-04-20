

const searchBar = document.querySelector("#search-bar")
const submitBtn = document.querySelector("#submit-button")
const resultsDiv = document.querySelector("#search-results")
let addBtn = document.querySelector("#add-button")

const apiUrl = "https://www.googleapis.com/books/v1/volumes?q="

const makeCard = (book) => {
    return `
    <div class="individual-result">
    <img src="${book.img}">
    <p>${book.title}</p>
    <p>${book.subtitle}</p>
    <br>
    <button class="bot-btn" onclick="addToList(${book.id})">Add book to Reading List</button>
    </div>
    `
}

let resultsArr = []

const searchFunction = (event) => {
    event.preventDefault()
    resultsList = ""
    searchData = searchBar.value
    if (searchData === "") {
        alert('Please input text before searching!')
    } else {
        axios.get(`${apiUrl}${searchData}`).then((res) => {
            //alert(`${apiUrl}${searchData}`)
            console.log(res.data.items[0])
            resultsDiv.innerHTML = ""
            resultsArr = []
            for (let i = 0; i < 10; i++ ){
            let bookInfo = res.data.items[i]
            bookObject = {
                id: [i],
                title: bookInfo.volumeInfo.title,
                subtitle: bookInfo.volumeInfo.subtitle,
                img: bookInfo.volumeInfo.imageLinks.smallThumbnail

            }
            resultsArr.push(bookObject)
            console.log(bookInfo.volumeInfo.title + " " + bookInfo.volumeInfo.subtitle)
            resultsDiv.innerHTML += makeCard(bookObject)
            //resultsDiv.innerHTML += `<div class="individual-result"><img src="${bookInfo.volumeInfo.imageLinks.smallThumbnail}"><p>${bookInfo.volumeInfo.title}</p><p>${bookInfo.volumeInfo.subtitle}</p><br><p>${bookObject.id}</p></div>`
        }
        })
    }
}

const addToList = (id) => {
    //alert(`Cannot add books to the list at the moment. Sorry for the inconvenience!`)
    let index = resultsArr.findIndex((bookObject) => bookObject.id === id);
    theChosenOne = resultsArr[id]
    console.log(theChosenOne)
    console.log(id)
    //alert(`${id}`)
    axios.post("http://localhost:4000/server.js/bookList", theChosenOne)
    .then(res => {
        alert(res.data);
});
}

submitBtn.addEventListener('click', searchFunction)

//addBtn.addEventListener('click', addToList)