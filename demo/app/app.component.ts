import {Component, ViewChild} from '@angular/core';
import {NotificationContainerComponent} from "../../lib/notification-container/notification-container.component";
import {NotificationType} from "../../lib/objects/notification-type.object";
import {NotificationObject} from "../../lib/objects/notification.object";

@Component({
  selector: 'a-noty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-noty works!';
  private notificationTypes = [
    {name: "Success", type: NotificationType.SUCCESS},
    {name: "Error", type: NotificationType.ERROR},
    {name: "Info", type: NotificationType.INFO},
    {name: "Warning", type: NotificationType.WARNING}
  ];
  private selectedType;
  @ViewChild(NotificationContainerComponent) notificationContainer: NotificationContainerComponent;

  constructor() {
    this.selectedType = this.notificationTypes[0];
  }

  showNotification() {
    var notificationObject = new NotificationObject();
    notificationObject.type = this.selectedType.type;
    notificationObject.title = this.selectedType.name + " Notification";
    notificationObject.message = "Sample Message";
    this.notificationContainer.pushToArray(notificationObject);
  }

  deleteNotification() {
    this.notificationContainer.deleteFromArray();
  }
}
