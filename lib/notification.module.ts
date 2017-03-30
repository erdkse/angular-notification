import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification/notification.component';
import {NotificationContainerComponent} from "./notification-container/notification-container.component";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NotificationContainerComponent, NotificationComponent],
  exports: [NotificationContainerComponent,NotificationComponent]
})
export class NotificationModule {
}
