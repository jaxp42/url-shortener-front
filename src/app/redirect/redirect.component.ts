import { Component } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent {

  private url: String = window.location.href;

  constructor(){
    this.redirect();
  }

  redirect(): void {
    console.log(this.url);
    //TODO get url. If exist redirect. If not exist show error.
  }
}
