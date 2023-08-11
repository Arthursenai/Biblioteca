class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.booksBorrowed = [];
    }
    getBookBorrowed(book) {
        let msg = "";
        this.booksBorrowed.push(book);
        this.booksBorrowed.forEach((book) => {
            msg += book.title;
        })
        return console.log(`O usuário ${user1.name} ${msg}`);
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
}
const book1 = new Book("Joao das nevesBook", "Koala escritor", "300");
const book2 = new Book("Caçador de Perolas", "Math Costa", "400");
const book3 = new Book("Caçador de Perolas 2", "Math Costa", "100");
const user1 = new User("Joao Victor", "30");
const user2 = new User("Lucas Moura", "12");
const user3 = new User("James Silva", "34");
const user4 = new User("Joao vitorioso", "11");
const user5 = new User("Livia Marques", "32");
const library = new Library();

library.addBook(book1);
library.addUser(user1);
user1.getBookBorrowed(book1);
user1.getBookBorrowed(book2);
user1.getBookBorrowed(book3);


// library.addBook(book2);
// library.addUser(user2);
// user2.getBookBorrowed(book2);

// library.addBook(book3);
// library.addUser(user3);
// user3.getBookBorrowed(book3);

// library.addBook(book3);
// library.addUser(user4);
// user4.getBookBorrowed(book3);

// library.addBook();
// library.addUser(user5);



// console.log(book1);

// console.log(book1);
// console.log(user2);
// console.log(book2);
// console.log(user3);
// console.log(book3);
// console.log(user3);
//console.log(library);
//o usuario name tem esses livros emprestados objeto
//console.log(`O(a) usuário ${user1.name} tem esses livros emprestados ${user1.booksBorrowed[0].title}`);