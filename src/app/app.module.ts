import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
