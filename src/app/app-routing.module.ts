import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component imports
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

const routes: Routes = [
  {path: 'home', component: UrlShortenerComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
