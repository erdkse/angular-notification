import {Component} from '@angular/core';

@Component({
  selector: 'a-noty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-noty works!';
  private isShown: boolean = false;

  showNotification() {
    this.isShown = this.isShown ? false : true;
  }
}
