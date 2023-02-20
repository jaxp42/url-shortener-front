import { Injectable } from '@angular/core';
import { ShortUrl } from 'src/app/interfaces/shortUrl';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }


  getAllUrls(): ShortUrl[]{
    return [
      {
        id: 1,
        shortUrl: "localhost:4200/abcd",
        originalUrl: "www.google.es"
      },
      {
        id: 2,
        shortUrl: "localhost:4200/abce",
        originalUrl: "www.google.es"
      },
      {
        id: 3,
        shortUrl: "localhost:4200/abcf",
        originalUrl: "www.google.es"
      }
    ];
  }

  getUrlByShortValue(shortUrlValue: String): ShortUrl{
    const shortUrl: ShortUrl = {
      id: 1,
      shortUrl: "localhost:4200/abcd",
      originalUrl: "www.google.es"
    }

    return shortUrl;
  }

  deleteUrlById(id: number): void { 
    console.log("Deleting url: " + id);
  }

  postUrl(url: String): ShortUrl{
    console.log("Posting: " + url);
    const shortUrl: ShortUrl = {
      id: 1,
      shortUrl: "localhost:4200/abcd",
      originalUrl: "www.google.es"
    }
    return shortUrl;
  }
}
