import { Injectable } from '@angular/core';
import Books_List from '../books/books.data';
import { Book } from '../interface/book';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books=Books_List;
  myBooks:Book[]=[];
  private booksSubject = new BehaviorSubject<Book[]>(this.books);
  private myBooksSubject = new BehaviorSubject<Book[]>(this.myBooks);

  constructor(private router:Router) { }

  addBook(book: { title: string; author: string; isbn: string }) {
    const newBook: Book = {
      id: (this.books.length + 1).toString(),
      title: book.title,
      author: book.author,
      ISBN: book.isbn,
      availability: true,
      issuedByUser: null
    };
    this.books.push(newBook);
    this.router.navigate(["home"]);
  }

  getBooksObservable():Observable<Book[]>{
    return this.booksSubject.asObservable();
  }

  getMyBooksObservable():Observable<Book[]>{
    return this.myBooksSubject.asObservable();
  }

  getMyBooks(){
    return this.myBooks;
  }

  getBookById(id: string): Book | undefined {
    return this.books.find(book => book.id === id);
  }  

  issueBook(book: Book) {
    this.myBooks.push(book);
    this.books = this.books.filter(b => b.id !== book.id);
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    } 
  
    const myBookIndex = this.myBooks.findIndex(book => book.id === updatedBook.id);
      if (myBookIndex !== -1) {
        this.myBooks[myBookIndex] = updatedBook;
    }
  }

  returnBook(book:Book){
    const index = this.myBooks.findIndex(b => b.id === book.id);
  if (index !== -1) {
    this.myBooks.splice(index, 1); 
    this.books.push(book);      
  }
  }

  deleteBook(bookId:string){
    this.books = this.books.filter(book => book.id !== bookId);
   this.myBooks = this.myBooks.filter(book => book.id !== bookId);
   this.booksSubject.next(this.books);
   this.myBooksSubject.next(this.myBooks);
  }
}
