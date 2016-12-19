import { browser, element, by } from 'protractor';

export class WytA2cliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wyt-app h2')).getText();
  }
}
