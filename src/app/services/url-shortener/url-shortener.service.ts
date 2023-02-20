import { Injectable } from '@angular/core';

//services
import { BackendService } from '../backend-serivce/backend.service';

//interfaces
import { ShortUrl } from 'src/app/interfaces/shortUrl';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor(private backendService: BackendService) { }

  createUrl(url: String): ShortUrl {
    return this.backendService.postUrl(url);
  }

  getAllUrl(): ShortUrl[] {
    return this.backendService.getAllUrls();
  }

  getUrlByShortValue(url: string): ShortUrl{
    return this.backendService.getUrlByShortValue(url);
  }

  deleteUrlById(id: number): void{
    this.backendService.deleteUrlById(id);
  }
}
