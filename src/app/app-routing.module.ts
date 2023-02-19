import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component imports
import { HeaderComponent } from './header/header.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: '**', component: RedirectComponent}
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
