import { Interview2Page } from './app.po';

describe('interview2 App', () => {
  let page: Interview2Page;

  beforeEach(() => {
    page = new Interview2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
