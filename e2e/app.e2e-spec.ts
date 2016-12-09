import { Ng2FunPage } from './app.po';

describe('ng2-fun App', function() {
  let page: Ng2FunPage;

  beforeEach(() => {
    page = new Ng2FunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
