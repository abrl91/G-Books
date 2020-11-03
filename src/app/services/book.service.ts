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


  getBooksFromApi(q: string, maxResults?: string, startIndex?: string): Observable<any> {
    if (!q.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(environment.baseApi, {params:
        {
          q,
          maxResults,
          startIndex,
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
    const findDuplicate = this.wishListBooks.find(b => b.title === book.title);
    if (!findDuplicate) {
      this.wishListBooks = [...this.wishListBooks, book];
      // localStorage.setItem('wishedBook', JSON.stringify(this.wishListBooks));
      return this.wishListBooks;
    }
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
