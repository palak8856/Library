import { Component, OnInit } from '@angular/core';
import Books_List from '../books.data';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit{

  All_Books:Book[]=Books_List;

constructor(private bookService:BookService){};

  ngOnInit(): void {
    this.bookService.getBooksObservable().subscribe((books:Book[])=>{
      this.All_Books=books;
    })
  } 

 trackById(index: number, book: Book): string {
  return book.id;
}
}
