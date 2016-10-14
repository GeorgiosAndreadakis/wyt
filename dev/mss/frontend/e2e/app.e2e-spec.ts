import { WytMssPage } from './app.po';

describe('wyt-mss App', function() {
  let page: WytMssPage;

  beforeEach(() => {
    page = new WytMssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
