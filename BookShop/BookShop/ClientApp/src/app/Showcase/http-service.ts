import { Injectable , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './Book'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class BookService {

  basUrl:string
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string){this.basUrl = baseUrl}

  private booksUrl =  'api/Books'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
  }

  deleteBook(id: number) {
    return this.http.delete(this.booksUrl + '/' + id);
  }
}
