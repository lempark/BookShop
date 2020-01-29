import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Book'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  private booksUrl = 'api/Books'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }
}
