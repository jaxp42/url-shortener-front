import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //bootstrap

//component imports
import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './components/url-shortener/url-shortener.component';
import { UrlGeneratedTableComponent } from './components/url-generated-table/url-generated-table.component';
import { HeaderComponent } from './components/header/header.component';
import { RedirectComponent } from './components/redirect/redirect.component';

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
