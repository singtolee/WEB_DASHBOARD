import { SsboPage } from './app.po';

describe('ssbo App', () => {
  let page: SsboPage;

  beforeEach(() => {
    page = new SsboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
