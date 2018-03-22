import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping App';
  public options = {
    position: ['top', 'right'],
    timeOut: 3000,
    lastOnBottom: true
  };
}