import {Component, OnInit} from '@angular/core';
import {NotificationObject} from "../objects/notification.object";

@Component({
  selector: 'a-noty-notification-container',
  templateUrl: 'notification-container.component.html',
  styleUrls: ['notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit {

  private notificationList: Array<NotificationObject> = [];

  private ID: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  pushToArray(notification: NotificationObject) {
    notification.ID = this.ID;
    this.notificationList.unshift(notification);
    this.ID++;
  }

  deleteFromArray() {
    this.notificationList.splice(this.notificationList.length - 1, 1);
  }

  removeNotificationByID(event) {
    this.notificationList.splice(this.findNotificationPositionByID(event), 1);
  }

  private findNotificationPositionByID(ID: number) {
    for (var i = 0; i < this.notificationList.length; i++) {
      if (this.notificationList[i].ID == ID) {
        return i;
      }
    }
    return -1;
  }
}
