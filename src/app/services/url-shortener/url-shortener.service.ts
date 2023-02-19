import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor() { }

  createUrl(url: String): void {
    //TODO send url to backend
    console.log("shortening url");
  }

  getAllUrl(): void {
    //TODO get all urls from backend
    console.log("getting all urls");
  }
}
