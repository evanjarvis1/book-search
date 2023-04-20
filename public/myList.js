const listResults = document.querySelector("#list-results")

resultsArr = []

const makeCard = (book) => {
    return `
    <div class="individual-result">
    <img src="${book.img}">
    <p>${book.title}</p>
    <p>${book.subtitle}</p>
    <br>
    <button class="bot-btn" onclick="deleteBook(${book.id2})">Remove Book from Reading List</button>
    </div>
    `
}

const getList = () => {
    listResults.innerHTML = ""
    axios.get("http://localhost:4000/server.js/bookList")
    .then(res => {
        console.log(res.data);
        for (let i = 0; i < res.data.length; i++) {
            book = res.data[i]
            resultsArr.push(book)
            
            listResults.innerHTML += makeCard(book)
        }
        console.log(resultsArr)
})
}

const deleteBook = (id2) => {
    axios.delete(`http://localhost:4000/server.js/booklist/${id2}`)
    .then(res => {
        // alert(res.data);
        getList()
    })
}



//window.onload = getList