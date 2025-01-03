import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit{
  @Input() book!: Book;
  userRole!: string | null;

  constructor(private router: Router, private bookService: BookService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole=this.authService.getRole();
  }

  viewBook(Id:string) {
    this.router.navigate([`/view-book/${Id}`]);
  }

  checkoutBook() {
    if (this.book.availability) {
      this.book.availability = false;
      this.bookService.issueBook(this.book);
    }
  }

  returnBook(){
    if (!this.book.availability) {
      this.book.availability = true;
      this.bookService.returnBook(this.book);
    }
  }

  editBook(id: string|undefined) {
    this.router.navigate([`/edit-book/${id}`], { state: { book: this.book } });
  }

  getUserRole(){
    this.userRole=this.authService.getRole();
  }

  deleteBook(bookId:string){
    this.bookService.deleteBook(bookId);
  }
}
