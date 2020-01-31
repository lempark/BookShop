import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Inject } from '@angular/core';
import { Book} from './Book'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase-component.html',
  styleUrls: ['./showcase.css']
})  
export class ShowCaseComponent  {
  books: Book[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Book[]>(baseUrl + 'api/Books').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
  }

  
}
