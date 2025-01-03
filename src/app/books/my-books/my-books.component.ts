import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit{
  My_Books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getMyBooksObservable().subscribe((books:Book[])=>{
      this.My_Books=books;
    })
  }

  trackById(index: number, book: Book): string {
    return book.id;
  }
}
