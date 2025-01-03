import { Component } from '@angular/core';
import Books_List from '../books.data';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent {
 All_Books:Book[]=Books_List;

 trackById(index: number, book: Book): string {
  return book.id;
}
}
