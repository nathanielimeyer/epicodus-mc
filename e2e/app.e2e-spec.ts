import { EpicodusMcPage } from './app.po';

describe('epicodus-mc App', () => {
  let page: EpicodusMcPage;

  beforeEach(() => {
    page = new EpicodusMcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
