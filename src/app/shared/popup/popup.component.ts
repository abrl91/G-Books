import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../models/book';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() isDialogOpen = false;
  @Input() book: Book;
  @Input() isInWishList: boolean;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  @Output() removeBook: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickOutside() {
    this.closeDialog.emit();
  }

  addToWishList() {
    this.addBook.emit();
  }

  removeFromWishList() {
    this.removeBook.emit();
  }
}
