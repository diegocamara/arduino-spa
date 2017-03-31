import { ArduinoSpaPage } from './app.po';

describe('arduino-spa App', () => {
  let page: ArduinoSpaPage;

  beforeEach(() => {
    page = new ArduinoSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
