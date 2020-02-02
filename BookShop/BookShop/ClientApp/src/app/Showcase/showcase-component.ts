import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Book } from '../models/Book'
import { BookService} from '../services/http-service'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase-component.html',
  styleUrls: ['./showcase.css'],
  providers: [BookService]
})  
export class ShowCaseComponent  {
  books: Book[] = [];
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
     this.http.get<Book[]>(baseUrl +'api/Books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
  }

 
