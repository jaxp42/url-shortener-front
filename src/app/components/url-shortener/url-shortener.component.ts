import { Component } from '@angular/core';

//services
import { UrlShortenerService } from '../../services/url-shortener/url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})

export class UrlShortenerComponent {

  resultUrl: String = "";

  constructor(private urlShortenerService: UrlShortenerService) {}

  createUrl(): void {
    this.urlShortenerService.createUrl("url");
  }
}
