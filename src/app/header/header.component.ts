import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  private newUrlCreation: boolean = false;
  private showUrls: boolean = false;

  get isNewUrlCreationSelected(): boolean {
    return this.newUrlCreation;
  }

  get isShowUrlsSelected(): boolean {
    return this.showUrls;
  }
  
  selectNewUrlCreation(): void {
    this.showUrls = false;
    this.newUrlCreation = true;
  }

  selectShowUrls(): void {
    this.newUrlCreation = false;
    this.showUrls = true;
  }
}
