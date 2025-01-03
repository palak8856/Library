import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
bookForm!:FormGroup;

constructor(private formBuilder: FormBuilder, private bookService: BookService) {
  this.bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    isbn: ['', Validators.required]
  });
}

onSubmit() {
  console.log('Form Valid:', this.bookForm.valid);
console.log('Form Value:', this.bookForm.value);
console.log('Form Errors:', this.bookForm.errors);

  if (this.bookForm.valid) {
    this.bookService.addBook(this.bookForm.value);
  } 
  else{
    alert("Please fill all the fields correctly");
    console.log(this.bookForm.errors);
  }
}
}
