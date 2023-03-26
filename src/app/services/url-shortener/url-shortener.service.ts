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

  async getAllUrl() {
    var shortUrlList: ShortUrl[] = [];

    await this.backendService.getAllUrls()
    .then(res => {
      console.log(res);
      shortUrlList = res;
    })
    .catch();

    return shortUrlList;
  }

  getUrlByShortValue(url: string): ShortUrl{
    return this.backendService.getUrlByShortValue(url);
  }

  deleteUrlById(id: number): void{
    this.backendService.deleteUrlById(id);
  }
}
