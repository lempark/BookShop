import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Inject } from '@angular/core';
import { Book } from './Book'
import { BookService} from './http-service'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase-component.html',
  styleUrls: ['./showcase.css'],
  providers: [BookService]
})  
export class ShowCaseComponent  {
  books: Book[] = [];
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
     this.http.get<Book[]>(baseUrl +'/api/Books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }
  }

 
