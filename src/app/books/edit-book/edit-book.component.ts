import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  bookForm!: FormGroup;
  book!: Book;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Fetch the book details using the ID
    this.book = this.bookService.books.find(book => book.id === this.id) || this.bookService.myBooks.find(book => book.id === this.id) || ({} as Book);

    if (this.book) {
      this.initializeForm(this.book);
    } else {
      alert('Book not found');
      this.router.navigate(['home']); 
    }
  }

  initializeForm(book: Book): void {
    this.bookForm = this.fb.group({
      title: [book.title, Validators.required],
      author: [book.author, Validators.required],
      isbn: [book.ISBN, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const updatedBook: Book = {
        ...this.book,
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        ISBN: this.bookForm.value.isbn
      };

      this.bookService.updateBook(updatedBook);
      this.router.navigate(['home']);
    } 
  }
}
