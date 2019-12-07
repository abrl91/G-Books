import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public userName: FormControl;
  public isEnteredValidUserName = true;

  constructor(private route: Router) { }

  ngOnInit() {
    this.userName = new FormControl('', [Validators.required]);
  }

  goToBooks() {
    this.userName.markAsDirty();
    if (this.userName.valid) {
      this.route.navigate(['main'], {queryParams: {userName: this.userName.value}});
    } else {
      this.isEnteredValidUserName = false;
    }
  }

}
