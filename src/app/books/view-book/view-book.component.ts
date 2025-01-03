import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  book!: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    console.log(bookId)
    if (bookId) {
      this.book = this.bookService.getBookById(bookId);
      if (!this.book) {
        alert('Book not found!');
        this.back(); 
      }
    }
  }

  back() {
    this.router.navigate(['/home']);
  }

}
