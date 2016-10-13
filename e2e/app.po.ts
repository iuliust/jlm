import { browser, element, by } from 'protractor';

export class JlmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jlm-root h1')).getText();
  }
}
