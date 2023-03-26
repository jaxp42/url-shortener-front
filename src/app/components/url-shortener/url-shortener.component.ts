import { Component } from '@angular/core';
import { ShortUrl } from 'src/app/interfaces/shortUrl';

//services
import { BackendService } from 'src/app/services/backend-serivce/backend.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})

export class UrlShortenerComponent {

  private resultUrl: ShortUrl = {} as ShortUrl;
  urlToShort: string = ""
  isCreated: boolean = false;

  constructor(private backendService: BackendService) {}

  createUrl(): void {
    this.backendService.postUrl(this.urlToShort)
      .then(res => {
        
      })
      .catch();
    this.isCreated = true;
  }

  copyUrl(): void {
    navigator.clipboard.writeText(this.resultUrl.shortUrl);
  }

  get getResultUrl(): ShortUrl{
    return this.resultUrl;
  }
}
