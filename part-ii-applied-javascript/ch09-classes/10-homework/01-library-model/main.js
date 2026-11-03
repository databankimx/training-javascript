class Book {
  constructor(title) {
    this.title = title;
    this.borrowed = false;
  }

  borrow() { this.borrowed = true; }
  returnBook() { this.borrowed = false; }
}

class Library {
  constructor(books) { this.books = books; }
  find(title) { return this.books.find(book => book.title === title); }
}

const library = new Library([new Book("The Odyssey"), new Book("The Hobbit")]);
library.find("The Odyssey").borrow();
library.books.forEach(book => console.log(`${book.borrowed ? "Borrowed" : "Available"}: ${book.title}`));
