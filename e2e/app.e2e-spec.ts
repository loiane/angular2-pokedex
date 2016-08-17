import { Angular2PokedexPage } from './app.po';

describe('angular2-pokedex App', function() {
  let page: Angular2PokedexPage;

  beforeEach(() => {
    page = new Angular2PokedexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
