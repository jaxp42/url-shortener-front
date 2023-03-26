import { Component } from '@angular/core';


//interfaces
import { ShortUrl } from '../../interfaces/shortUrl';
import { BackendService } from 'src/app/services/backend-serivce/backend.service';

@Component({
  selector: 'app-url-generated-table',
  templateUrl: './url-generated-table.component.html',
  styleUrls: ['./url-generated-table.component.css']
})
export class UrlGeneratedTableComponent {

  private urls: ShortUrl[] = [];

  constructor(private backendService: BackendService){
    this.loadUrls();
  }

  loadUrls(): void {
    this.backendService.getAllUrls()
      .then(res => {
        this.urls = res;
      })
      .catch(error => {
        console.log("ERROR LOADING URLS");
      })
  }

  copyUrl(url: string): void {
    navigator.clipboard.writeText(url);
  }

  deleteUrl(id: number): void {
    this.backendService.deleteUrlById(id)
      .then(res => {
        console.log(res);
        this.loadUrls();
      })
      .catch(error => {
        console.log(error);
      })
  }

  get getUrls(): ShortUrl[]{
    return this.urls;
  }
}
