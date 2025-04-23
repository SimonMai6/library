const myLibrary = [];
let isNewBook = false;
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsClose = document.getElementById("js-close");
const jsSubmit = document.getElementById("js-submit");
const myForm = document.getElementById("my-form");


function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(title, author, pages) {
    const id = crypto.randomUUID();
    const book = new Book(title, author, pages, id);
    myLibrary.push(book);
}

function displayBookToTable() {
    const bookTable = document.getElementById("book-table");
    console.log(isNewBook);
    if (isNewBook) {
        const newRow = bookTable.insertRow(myLibrary.length+1);
        console.log(myLibrary[myLibrary.length-1]);
        for (const value of Object.values(myLibrary[myLibrary.length-1])) {
            const newCell = newRow.insertCell();
            newCell.textContent = value;
        }
        addRemoveBtn(newRow);
    }
    else {
        for (const key of myLibrary) {
            const rowLength = bookTable.rows.length;
            const newRow = bookTable.insertRow(rowLength);
            for (const value of Object.values(key)){
                const newCell = newRow.insertCell();
                newCell.textContent = value;
            }
            addRemoveBtn(newRow);
        }
    }
    isNewBook = false;
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
    if (myForm.reportValidity() === true) {
        addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value);
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
        console.log("Button clicked:", event.target);
    }
});


addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281);
addBookToLibrary("Moby-Dick", "Herman Melville", 635);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("War and Peace", "Leo Tolstoy", 1225);
addBookToLibrary("The Odyssey", "Homer", 500);
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 430);
addBookToLibrary("Brave New World", "Aldous Huxley", 311);
addBookToLibrary("The Divine Comedy", "Dante Alighieri", 800);
addBookToLibrary("Wuthering Heights", "Emily Brontë", 348);
addBookToLibrary("Frankenstein", "Mary Shelley", 280);
addBookToLibrary("Dracula", "Bram Stoker", 488);
displayBookToTable();