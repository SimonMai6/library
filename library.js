const myLibrary = [];

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
    let bookTable = document.getElementById("bookTable");
    for (const key of myLibrary) {
        const rowLength = bookTable.rows.length;
        const newRow = bookTable.insertRow(rowLength);
        const row = bookTable.rows[rowLength];
        for (const value of Object.values(key)){
            const newCell = row.insertCell();
            newCell.textContent = value;
        }   
    }
}

addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180);
addBookToLibrary('1984', 'George Orwell', 328);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281);
addBookToLibrary('Moby-Dick', 'Herman Melville', 635);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310);
addBookToLibrary('War and Peace', 'Leo Tolstoy', 1225);
addBookToLibrary('The Odyssey', 'Homer', 500);
addBookToLibrary('Crime and Punishment', 'Fyodor Dostoevsky', 430);
addBookToLibrary('Brave New World', 'Aldous Huxley', 311);
addBookToLibrary('The Divine Comedy', 'Dante Alighieri', 800);
addBookToLibrary('Wuthering Heights', 'Emily Brontë', 348);
addBookToLibrary('Frankenstein', 'Mary Shelley', 280);
addBookToLibrary('Dracula', 'Bram Stoker', 488);


displayBookToTable();