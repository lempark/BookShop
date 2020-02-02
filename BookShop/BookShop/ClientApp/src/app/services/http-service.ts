import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '../models/Book'
import { Observable } from 'rxjs';


@Injectable()
export class BookService {

  basUrl: string
  constructor(private http: HttpClient) { }

  private booksUrl = 'api/Books'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }

  createBook(book: Book) {
    return this.http.post(this.booksUrl, book);
  }

  editBook(id: number, book: Book) {
    const bookParams = new HttpParams().set("id", id.toString());
    return this.http.put(this.booksUrl, book, { params: bookParams });
  }

  deleteBook(id: number) {
    return this.http.delete(this.booksUrl + '/' + id);
  }

}
