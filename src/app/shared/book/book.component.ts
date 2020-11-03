import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/book';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() btnClicked = false;
  @Output() openPopup: EventEmitter<Book> = new EventEmitter();
  public isDialogOpen = false;

  constructor(private BooksService: BookService) { }

  ngOnInit() {
  }

  get bookImgSrc() {
    if (this.book.imageLinks === undefined) {
      return;
    } else {
      return this.book.imageLinks.thumbnail;
    }
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  onAddBook() {
    this.BooksService.addBookToWishList(this.book);
    this.isDialogOpen = false;
  }

  get checkIfBookInWishList() {
    return this.BooksService.wishListBooks.find(bookItem => bookItem === this.book);
  }

  onRemoveBook() {
    this.BooksService.removeBookFromWishList(this.book.title);
    this.isDialogOpen = false;
  }

}
