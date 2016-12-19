import { WytA2cliPage } from './app.po';

describe('wyt-a2cli App', function() {
  let page: WytA2cliPage;

  beforeEach(() => {
    page = new WytA2cliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Answering the Question \"Who\'s Next?\"');
  });
});
