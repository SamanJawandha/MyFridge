import { MyFridgePage } from './app.po';

describe('my-fridge App', () => {
  let page: MyFridgePage;

  beforeEach(() => {
    page = new MyFridgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
