import { HttpService } from './http-service';
import { Component, OnInit } from '@angular/core';
import { Book} from './Book'

@Component({
  selector: 'app-showcase',
  templateUrl:'./showcase-component.html' ,
  providers: [HttpService]
})
export class ShowCaseComponent implements OnInit {
  books: Book[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getBooks().subscribe(data => this.books = data);
  }
}
