const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(){
    let availableBooks = [];
    for(i=0;i<=books.length;i++);{
     if(i.isAvailable==true){
           availableBooks.push(books.title);
     }
        
    }
    return availableBooks
}
console.log(getAvailableBooks())

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(author){
    let authersBooks = [];
    for(i=0;i<=books.length;i++){
        if(i.title==i.author){
            authersBooks.push(books.title);
        }
        
    }
    return authersBooks
}
console.log(getBooksByAuthor)

// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
let newBook = {title:"Born a crime",author:"Trevor Noah",publicationYear:2015,isAvailable:true}

function addNewBook(){
     let library = [];
     if (newBook===title && author && publicationYear && isAvailable){
        library.push(newBook);
        books.push(library);
     }
console.log(books)
}
addNewBook()

// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
let name = books.title
function checkoutBook(name){
for(i=0;i<=books.length;i++){
    if(i.title<=1){
      i.isAvailable = false
    }
    else{
        console.log("Book is not found")
    }
}
}
checkoutBook()
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
 function returnBook(){
 for(i=0;i<=books.length;i++){
    if(i.title<=1){
        i.isAvailable=true
    }
    else{
        console.log("The book is not in the library")
    }
 }
 }
 returnBook()