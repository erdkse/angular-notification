import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'a-noty-notification-container',
  templateUrl: 'notification-container.component.html',
  styleUrls: ['notification-container.component.css']
})
export class NotificationContainerComponent implements OnInit {

  private sampleArray = [1, 2];
  private shown = true;

  constructor() {
  }

  close() {
    this.shown = false;
    console.log('clicked');
  }

  ngOnInit() {
  }

}
