import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ViewBookComponent } from './books/view-book/view-book.component';
import { authGuard } from './auth/auth.guard';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { HomeComponent } from './home/home.component';
import { MyBooksComponent } from './books/my-books/my-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [authGuard],
    data: { role: 'Librarian' },
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent,
    canActivate: [authGuard],
    data: { role: 'Librarian' },
  },
  {
    path: 'view-book/:id',
    component: ViewBookComponent,
  },
  {
    path: 'my-books',
    component: MyBooksComponent,
  },
  // { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
