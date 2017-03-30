import {Component, OnInit, OnDestroy} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from "@angular/animations";

@Component({
  selector: 'a-noty-notification',
  templateUrl: 'notification.component.html',
  styleUrls: [
    'notification.component.css',
    'button.css'
  ],
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
        animate(1000, keyframes([
          style({
            opacity: 1,
            transform: 'translate3d(3000px, 0, 0)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'translate3d(-25px, 0, 0)',
            offset: 0.315
          }),
          style({
            transform: 'translate3d(10px, 0, 0)',
            offset: 0.810
          }),
          style({
            transform: 'translate3d(-5px, 0, 0)',
            offset: 0.845
          }),
          style({
            transform: 'none',
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        animate(800, keyframes([
          style({
            opacity: 1,
            transform: 'none',
            offset: 0
          }),
          style({
            opacity: 0.8,
            transform: 'translate3d(-20px, 0, 0)',
            offset: 0.6
          }),
          style({
            opacity: 0,
            transform: 'translate3d(2000px, 0, 0)',
            offset: 0.8
          })
        ]))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit,OnDestroy {

  constructor() {
  }

  ngOnInit() {
    console.log("Created");
  }

  ngOnDestroy() {
    console.log("Destroyed");
  }

}
