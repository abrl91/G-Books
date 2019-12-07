import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private activeRoute: ActivatedRoute) { }


  get userName() {
    return this.activeRoute.snapshot.queryParams.userName;
  }
}
