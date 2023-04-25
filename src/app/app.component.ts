import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';
  showImg: boolean = true;

  onLoaded(img: string): void {
    console.log('Log Parent', img);
  }

  toggleImg(): void {
    this.showImg = !this.showImg;
  }
}
