import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationComponent} from './notification/notification.component';
import {NotificationContainerComponent} from "./notification-container/notification-container.component";
import {SafeHtmlPipe} from "./pipes/safe-html.pipe";
import {ReverseArrayPipe} from "./pipes/reverse-array.pipe";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [NotificationContainerComponent, NotificationComponent, SafeHtmlPipe, ReverseArrayPipe],
  exports: [NotificationContainerComponent]
})
export class NotificationModule {
}
