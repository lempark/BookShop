import { TemplateRef, ViewChild } from '@angular/core';
import { Component} from '@angular/core';
import { Book } from '../models/Book'
import { BookService } from '../services/http-service'


@Component({
  selector: 'app-adminPage',
  templateUrl: './admin-page.html',
  styleUrls: ['./admin-page.css'],
  providers: [BookService]
})

export class AdminPageComponent {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  editedBook: Book;
  isNewRecord: boolean;

  books: Book[] = [];
  private serv: BookService;

  constructor(private service: BookService) {
    this.serv = service;
    this.books = new Array<Book>();
    this.loadBooks();
  }


  deleteBook(book: Book) {
    this.serv.deleteBook(book.id).subscribe(data => {
      this.loadBooks();
    })
  }

  createBook() {
  this.editedBook = new Book(0,"","","",0);
  this.books.push(this.editedBook);
  this.isNewRecord = true;
}

  editeBook(book: Book) {
    this.editedBook = new Book(book.id, book.photoUrl, book.name, book.author, book.price);
    
  }

  loadTemplate(book:Book) {
    if (this.editedBook && this.editedBook.id == book.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveBook() {
    if (this.isNewRecord) {
      
      this.serv.createBook(this.editedBook).subscribe(data => {
          this.loadBooks();
      });
      this.isNewRecord = false;
      this.editedBook = null;
    }
    else { 
      this.serv.editBook(this.editedBook.id, this.editedBook).subscribe(data => {
          this.loadBooks();
      });
      this.editedBook = null;
    }
  }

  cnacelEditing() {
    if (this.isNewRecord) {
      this.books.pop();
      this.isNewRecord = false;
    }
    this.editedBook = null;
  }

  private loadBooks() {
    this.serv.getBooks().subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
}
