import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular First-app demo';
  randomId = 0;

  constructor() {
    this.randomId = Math.floor(Math.random() * 5);
  }
}
