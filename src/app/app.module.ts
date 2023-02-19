import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //bootstrap

//component imports
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { UrlGeneratedTableComponent } from './url-generated-table/url-generated-table.component';
import { HeaderComponent } from './header/header.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenerComponent,
    UrlGeneratedTableComponent,
    HeaderComponent,
    RedirectComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
