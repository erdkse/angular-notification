import { browser, element, by } from 'protractor';

export class AngularNotificationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a-noty-root h1')).getText();
  }
}
