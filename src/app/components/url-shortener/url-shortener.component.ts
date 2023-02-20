import { Component } from '@angular/core';
import { ShortUrl } from 'src/app/interfaces/shortUrl';

//services
import { UrlShortenerService } from '../../services/url-shortener/url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})

export class UrlShortenerComponent {

  private resultUrl: ShortUrl = {} as ShortUrl;
  urlToShort: string = ""
  isCreated: boolean = false;

  constructor(private urlShortenerService: UrlShortenerService) {}

  createUrl(): void {
    this.resultUrl = this.urlShortenerService.createUrl(this.urlToShort);
    this.isCreated = true;
  }

  copyUrl(): void {
    navigator.clipboard.writeText(this.resultUrl.shortUrl);
  }

  get getResultUrl(): ShortUrl{
    return this.resultUrl;
  }
}
