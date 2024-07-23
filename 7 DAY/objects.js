// Tasks/Activities:

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const myBook = {
    title: "Alone Boy",
    author: "Mr. Zubair",
    year: 2024
}
// console.log(myBook);

// Task 2: Access and log the title and author properties of the book object.
// console.log(myBook.title);
// console.log(myBook.author);

// -------------------------------------

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const Book = {
    title: "Alone Boy",
    author: "Mr. Zubair",
    year: 2024,
    info: function(){
        return `So this book title is : ${this.title} and author is : ${this.author}`
    },
    latestYear: function(val){
        this.year = val;
    }
}
// console.log(Book.info());


// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
Book.latestYear(2026);
// console.log(Book);

// -------------------------------------

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let myLibrary = {
    name: "Book Libraray",
    books: [
        {
            book: "book one",
            author: "Zubair Khan",
            title: "Ham aapke hai kon"
        },
        {
            book: "book two",
            author: "Ahmad khan",
            title: "Dil hai ke manta nhi"
        }
    ]
}
// console.log(myLibrary.books[0].author);
// console.log(myLibrary.books[1].author);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
// for (let i = 0; i < myLibrary.books.length; i++) {
//     let book = myLibrary.books[i];
//     for (let key in book) {
//         console.log(key + ": " + book[key]);
//     }
//     console.log("---------");
// }
// ye all object ke key and value dega 

// console.log(myLibrary.name);
// for (let i = 0; i < myLibrary.books.length; i++) {
//     console.log(myLibrary.books[i].title);
// }


// -------------------------------------

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
let Library = {
    name: "Book Libraray",
    books: [
        {
            book: "book one",
            author: "Zubair Khan",
            title: "Ham aapke hai kon",
            year: 1992
        },
        {
            book: "book two",
            author: "Ahmad khan",
            title: "Dil hai ke manta nhi",
            year: 2005
        }
    ],
    titleAndYear: function(){
        return `Book Title : ${this.books[0].title} Book Year : ${this.books[0].year}`
    },
    getAllTitlesAndYears: function(){
        let result = "";
        for(let i = 0; i < Library.books.length; i++){
            result += `Book Title : ${this.books[i].title}, Book Year : ${this.books[i].year}\n`
        }
        return result;
    },
    logBookKeysAndValues: function() {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            console.log(`Book ${i + 1}:`);
            console.log("Keys: ", Object.keys(book));
            console.log("Values: ", Object.values(book));
        }
    }
}
// console.log(Library.getAllTitlesAndYears());


// -------------------------------------

// Activity 5: Object Iteration

// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
// for(let i = 0; i < Library.books.length; i++){
//     let book = Library.books[i];

//     for(let key in book){
//         console.log(key + ": " + book[key]+ ",");
//     }
// }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

Library.logBookKeysAndValues();



