import {NotificationType} from "./notification-type.object";

export class NotificationObject {
  public ID: number;
  public type: NotificationType;
  public title: string;
  public message: string;
}
