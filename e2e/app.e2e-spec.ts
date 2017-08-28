import { AngularWijmoFlexsheetPage } from './app.po';

describe('angular-wijmo-flexsheet App', () => {
  let page: AngularWijmoFlexsheetPage;

  beforeEach(() => {
    page = new AngularWijmoFlexsheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
