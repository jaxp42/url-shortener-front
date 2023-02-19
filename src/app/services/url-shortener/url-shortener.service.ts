import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  constructor() { }

  createUrl(url: String): void {
    //TODO send url to backend
    console.log("shortening url: " + url);
  }

  getAllUrl(): void {
    //TODO get all urls from backend
    console.log("getting all urls");
  }

  getUrlByShortValue(url: string): void{
    //TODO
    console.log("getting url: " + url);
  }

  deleteUrlById(id: number){
    //TODO
    console.log("Deleting url: " + id);
  }
}
