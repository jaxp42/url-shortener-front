import { Component } from '@angular/core';

//Services
import { BackendService } from 'src/app/services/backend-serivce/backend.service';

const baseUrl = "http://localhost:4200/"

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {

  private url: String = window.location.href;

  constructor(private backendService: BackendService){
    this.redirect();
  }

  redirect(): void {
    var shortedUrl = this.url.replace(baseUrl, "");
    console.log(this.url);
    console.log(shortedUrl)

    this.backendService.getUrlByShortValue(shortedUrl)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    //TODO get url. If exist redirect. If not exist show error.
  }
}
