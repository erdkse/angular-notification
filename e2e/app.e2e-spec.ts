import { AngularNotificationPage } from './app.po';

describe('angular-notification App', () => {
  let page: AngularNotificationPage;

  beforeEach(() => {
    page = new AngularNotificationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('a-noty works!');
  });
});
