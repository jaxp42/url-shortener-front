import { Component } from '@angular/core';

//services
import { UrlShortenerService } from '../../services/url-shortener/url-shortener.service';

//interfaces
import { ShortUrl } from '../../interfaces/shortUrl';

@Component({
  selector: 'app-url-generated-table',
  templateUrl: './url-generated-table.component.html',
  styleUrls: ['./url-generated-table.component.css']
})
export class UrlGeneratedTableComponent {

  private urls: ShortUrl[] = [];

  constructor(private urlShortenerService: UrlShortenerService){
    this.loadUrls();
  }

  loadUrls(): void {
    this.urls = this.urlShortenerService.getAllUrl();
  }

  copyUrl(url: string): void {
    navigator.clipboard.writeText(url);
  }

  deleteUrl(id: number): void {
    this.urlShortenerService.deleteUrlById(id);
  }

  get getUrls(): ShortUrl[]{
    return this.urls;
  }
}
