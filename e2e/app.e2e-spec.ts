import { SkillsAppPage } from './app.po';

describe('skills-app App', () => {
  let page: SkillsAppPage;

  beforeEach(() => {
    page = new SkillsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
