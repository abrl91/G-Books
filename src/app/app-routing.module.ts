import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './features/welcome-page/welcome-page.component';
import {MainComponent} from './features/main/main.component';
import {WishListComponent} from './features/wish-list/wish-list.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'wishList',
    component: WishListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

