import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Book} from '../../models/book';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishList: Book[] = [];

  constructor(private BooksService: BookService) { }

  ngOnInit() {
    this.wishList = this.BooksService.wishListBooks;
  }

}
