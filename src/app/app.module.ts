import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './features/welcome-page/welcome-page.component';
import { MainComponent } from './features/main/main.component';
import { WishListComponent } from './features/wish-list/wish-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { BookComponent } from './shared/book/book.component';
import { PopupComponent } from './shared/popup/popup.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { FooterComponent } from './shared/footer/footer.component';

import {SearchPipe} from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MainComponent,
    WishListComponent,
    HeaderComponent,
    BookComponent,
    PopupComponent,
    PaginatorComponent,
    FooterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
