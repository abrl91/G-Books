import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Book} from '../models/book';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  wishListBooks: Book[] = [];

  constructor(private http: HttpClient) { }


  getBooksFromApi(q: string, maxResults?: string): Observable<any> {
    if (!q.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(environment.baseApi, {params:
        {
          q,
          maxResults,
          startIndex: '0',
          apiKey: environment.API_KEY
        }
    })
      .pipe(
        map((res: any) => {
          return res.items.map(item => item.volumeInfo);
        }),
        catchError(this.handleError<Book[]>('countries', []))
      );
  }

  addBookToWishList(book: Book) {
    return this.wishListBooks.push(book);
  }

  removeBookFromWishList(bookTitle: string) {
    const bookIndex = this.wishListBooks.findIndex(book => book.title === bookTitle);
    this.wishListBooks.splice(bookIndex, 1);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
