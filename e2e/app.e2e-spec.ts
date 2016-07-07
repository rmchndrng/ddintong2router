import { Ddintong2routerPage } from './app.po';

describe('ddintong2router App', function() {
  let page: Ddintong2routerPage;

  beforeEach(() => {
    page = new Ddintong2routerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
