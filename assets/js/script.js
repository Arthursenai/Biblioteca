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

    getBookBorrowed() {
        
user1.booksBorrowed.push(book1);
user1.booksBorrowed.push(book2);
user1.booksBorrowed.push(book3);
user2.booksBorrowed.push(book2);
user3.booksBorrowed.push(book3);
user4.booksBorrowed.push(book3);


        let msg;
        if(this.booksBorrowed.length > 0){
        msg = `Os livros emprestados por ${this.name} são `;
        this.booksBorrowed.forEach(book => {
            msg +=  `${book.title} `;
        });
        return msg;
    } else{
        msg = `${this.name} não possui livros emprestados`;
    }
    return msg;
    
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

    librarys(){
        let msg2;

        msg2 = `Esses livros são os livros disponiveis: `;
        this.books.forEach((book => {
            msg2 +=  `${book.title} `;
        }));
        return msg2;
    }

    usuarios(){
        let msg3;

        msg3 = `Esses são os usuarios disponiveis: `;
        this.users.forEach((user => {
            msg3 +=  `${user.name} `;
        }));
        return msg3;
    }
}
const book1 = new Book("Joao das neves the Book", "Koala escritor", 300);
const book2 = new Book("Caçador de Perolas", "Math Costa", 400);
const book3 = new Book("Caçador de Perolas 2", "Math Costa", 100);
const user1 = new User("Joao Victor", 30);
const user2 = new User("Lucas Moura", 12);
const user3 = new User("James Silva", 34);
const user4 = new User("Joao vitorioso", 11);
const user5 = new User("Livia Marques", 32);
const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addUser(user1);

library.addUser(user2);

library.addUser(user3);

library.addUser(user4);

library.addUser(user5);
 console.log(user1.getBookBorrowed());
 console.log(user2.getBookBorrowed());
 console.log(user3.getBookBorrowed());
 console.log(user4.getBookBorrowed());
 console.log(user5.getBookBorrowed());
library.librarys(user1);
library.librarys(user2);
library.librarys(user3);
library.librarys(user4);
library.usuarios(user1);
library.usuarios(user2);
library.usuarios(user3);
library.usuarios(user4);
console.log(library.librarys());
console.log(library.usuarios());
