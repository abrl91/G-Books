import { Component, OnInit } from '@angular/core';
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

  constructor(private BooksService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  getBooks() {
    this.gBooks$ = this.searchTerm.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.BooksService.getBooksFromApi(term, '20')),
      tap(_ => this.loading = false)
    );
  }

}
