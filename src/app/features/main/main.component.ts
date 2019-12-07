import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  /// for the pipe approach
  // public books: Book[] = [];
  // public filterValue: string;

  gBooks$: Observable<Book[]>;
  public loading = false;
  private searchTerm = new Subject<string>();
  private searchTermValue: string;
  private startIndex = '0';
  private maxResult = '20';

  constructor(private BooksService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  search(term: string) {
    this.searchTerm.next(term);
    this.searchTermValue = term;
  }

  getBooks() {
    this.gBooks$ = this.searchTerm.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.BooksService.getBooksFromApi(term, `${this.maxResult}`, `${this.startIndex}`)),
      tap(_ => this.loading = false)
    );
  }


  prev() {
    if (parseInt(this.startIndex, 10) >= 0) {
      const prevPage = parseInt(this.startIndex, 10) - parseInt(this.maxResult, 10);
      this.startIndex = prevPage.toString();
      this.gBooks$ = this.BooksService.getBooksFromApi(this.searchTermValue, '20', `${this.startIndex}`);
    }
  }

  next() {
    const nextPage = parseInt(this.startIndex, 10) + 20;
    this.startIndex = nextPage.toString();
    this.gBooks$ = this.BooksService.getBooksFromApi(this.searchTermValue, '20', `${this.startIndex}`);
  }

}
