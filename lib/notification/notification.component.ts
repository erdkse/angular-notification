import {Component, OnInit, OnDestroy, Input, EventEmitter, Output} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from "@angular/animations";
import {NotificationObject} from "../objects/notification.object";
import {NotificationType} from "../objects/notification-type.object";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'a-noty-notification',
  templateUrl: 'notification.component.html',
  styleUrls: ['notification.component.css'],
  host: {
    '[@notyState]': 'true',
    'style': 'display: block;'
  },
  animations: [
    trigger('notyState', [
      state('out', style({
        opacity: 0,
        transform: 'translate3d(3000px, 0, 0)',
      })),
      state('in', style({
        opacity: 1,
        transform: 'none',
      })),
      transition('void => *', [
        animate(800, keyframes([
          style({
            opacity: 1,
            transform: 'translate3d(3000px, 0, 0)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'translate3d(-25px, 0, 0)',
            offset: 0.515
          }),
          style({
            transform: 'translate3d(10px, 0, 0)',
            offset: 0.610
          }),
          style({
            transform: 'translate3d(-5px, 0, 0)',
            offset: 0.645
          }),
          style({
            transform: 'none',
            offset: 0.8
          })
        ]))
      ]),
      transition('* => void', [
        animate(600, keyframes([
          style({
            opacity: 1,
            transform: 'none',
            offset: 0
          }),
          style({
            opacity: 0.8,
            transform: 'translate3d(-20px, 0, 0)',
            offset: 0.4
          }),
          style({
            opacity: 0,
            transform: 'translate3d(2000px, 0, 0)',
            offset: 0.6
          })
        ]))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit,OnDestroy {

  @Input() notificationObject: NotificationObject;
  @Output() onDestroyMe: EventEmitter<number> = new EventEmitter();
  private notificationType = NotificationType;
  private timerSubscription: Subscription;
  private totalTimerCount = 0;

  constructor() {
    let timer = Observable.timer(0, 100);
    this.timerSubscription = timer.subscribe(
      count => {
        this.totalTimerCount = count;
/*        if (this.totalTimerCount > 50) {
          this.onDestroyMe.emit(this.notificationObject.ID);
        }*/
        //console.log(count);
      }
    );
  }

  ngOnInit() {
    console.log(this.notificationObject);
  }

  ngOnDestroy() {
    console.log("Destroyed");
    this.timerSubscription.unsubscribe();
  }

  onClick() {
    this.onDestroyMe.emit(this.notificationObject.ID);
  }

  onMouseOver() {
    console.log("onMouseOver")
  }

  onMouseLeave() {
    console.log("onMouseLeave");
  }


}
