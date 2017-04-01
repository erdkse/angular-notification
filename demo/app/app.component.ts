import {Component, ViewChild} from '@angular/core';
import {NotificationContainerComponent} from "../../lib/notification-container/notification-container.component";

@Component({
  selector: 'a-noty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-noty works!';
  @ViewChild(NotificationContainerComponent) notificationContainer: NotificationContainerComponent;

  showNotification() {
    this.notificationContainer.pushToArray();
  }

  deleteNotification() {
    this.notificationContainer.deleteFromArray();
  }
}
