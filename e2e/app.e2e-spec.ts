import { JlmPage } from './app.po';

describe('jlm App', function() {
  let page: JlmPage;

  beforeEach(() => {
    page = new JlmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jlm works!');
  });
});
