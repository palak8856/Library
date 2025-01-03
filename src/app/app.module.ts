import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { MyBooksComponent } from './books/my-books/my-books.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { ViewBookComponent } from './books/view-book/view-book.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    AllBooksComponent,
    MyBooksComponent,
    BookItemComponent,
    ViewBookComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
