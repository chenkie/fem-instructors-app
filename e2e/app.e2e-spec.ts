import { FemInstructorsAppPage } from './app.po';

describe('fem-instructors-app App', () => {
  let page: FemInstructorsAppPage;

  beforeEach(() => {
    page = new FemInstructorsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
