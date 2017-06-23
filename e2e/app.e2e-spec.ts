import { AngularHttpErrorPage } from './app.po';

describe('angular-http-error App', () => {
  let page: AngularHttpErrorPage;

  beforeEach(() => {
    page = new AngularHttpErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
