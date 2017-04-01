import {Component, OnInit} from '@angular/core';
import {NotificationObject} from "../objects/notification.object";
import {NotificationType} from "../objects/notification-type.object";

@Component({
  selector: 'a-noty-notification-container',
  templateUrl: 'notification-container.component.html',
  styleUrls: ['notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit {

  private notificationList = [];

  constructor() {
  }

  pushToArray() {
    var notificationObject = new NotificationObject();
    notificationObject.ID = this.notificationList.length;
    notificationObject.type = NotificationType.SUCCESS;
    notificationObject.title = "Selam";
    notificationObject.message = "İşlem başarılı";
    this.notificationList.push(notificationObject);
  }

  deleteFromArray() {
    this.notificationList.splice(this.notificationList.length - 1, 1);
  }

  removeNotificationByID(event) {
    this.notificationList.splice(event, 1);
  }

  ngOnInit() {
  }

}
