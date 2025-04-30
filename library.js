const myLibrary = [];
let isNewBook = false;
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsClose = document.getElementById("js-close");
const jsSubmit = document.getElementById("js-submit");
const myForm = document.getElementById("my-form");
let i = 1;


function Book(title, author, pages, id, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    const book = new Book(title, author, pages, id, readBtn(read));
    myLibrary.push(book);
}

function displayBookToTable() {
    const bookTable = document.getElementById("book-table");
    if (isNewBook) {
        const newBookRow = myLibrary[myLibrary.length-1];
        addNewRow(bookTable, newBookRow);
    }
    else {
        for (const key of myLibrary) {
            addNewRow(bookTable, key);
        }
    }
    isNewBook = false;
}

function addNewRow(table, array) {
    const newRow = table.insertRow(table.rows.length);
    newRow.id = "row-" + i;
    for (const value of Object.values(array)){
        const newCell = newRow.insertCell();
        if(value.tagName === "BUTTON"){
            newCell.appendChild(value);
        }
        else {
            newCell.innerHTML = value;
        }
    }
    ++i;
    addRemoveBtn(newRow);
}

function addRemoveBtn(row) {
    const newCell = row.insertCell();
    const btn = document.createElement("button");
    btn.classList.add("remove-btn");
    btn.textContent = "remove";
    newCell.appendChild(btn);
}

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

jsSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const bookTitle = document.getElementById("book-title");
    const bookAuthor = document.getElementById("book-author");
    const bookPages = document.getElementById("book-pages");
    const bookRead = document.getElementById("book-read");
    if (myForm.reportValidity() === true) {
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value === "read" ? true : false);
        myForm.submit();
        myForm.reset();
        isNewBook = true;
        displayBookToTable();
    }
});

jsClose.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
});

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const removeRow = event.target.parentNode.parentNode;
        const rowTitle = removeRow.firstElementChild.innerHTML;
        const index = myLibrary.indexOf(myLibrary.find((element) => element.title === rowTitle));
        if (index > -1) {
            myLibrary.splice(index, 1);
        }
        removeRow.remove();
        console.log(myLibrary);
        --i;
    }
});

function readBtn(isRead) {
    const newBtn = document.createElement("button");
    newBtn.classList.add("read")
    if (isRead) {
        newBtn.textContent = "Read";
        return(newBtn);
    }
    else {
        newBtn.textContent = "Unread";
        return(newBtn);
    }
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225, false);
addBookToLibrary("The Odyssey", "Homer", 500, false);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 430, true);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, false);
addBookToLibrary("The Divine Comedy", "Dante Alighieri", 800, true);
addBookToLibrary("Wuthering Heights", "Emily Brontë", 348, true);
addBookToLibrary("Frankenstein", "Mary Shelley", 280, false);
addBookToLibrary("Dracula", "Bram Stoker", 488, false);
displayBookToTable();