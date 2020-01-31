import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../Showcase/Book'
import { BookService } from '../Showcase/http-service'

@Component({
  selector: 'app-adminPage',
  templateUrl: './admin-page.html',
  styleUrls: ['./admin-page.css'],
  providers: [BookService]
})

export class AdminPageComponent {
  books: Book[] = [];
  private serv: BookService;
  constructor(private service: BookService) {
    this.serv = service;
    this.serv.getBooks().subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }


  deleteBook(book: Book) {
    this.serv.deleteBook(book.id).subscribe(data => {
      this.loadBooks();
    })
  }

  private loadBooks() {
    this.serv.getBooks().subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
}
