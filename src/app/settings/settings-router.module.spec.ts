import { SettingsRouterModule } from './settings-router.module';

describe('SettingsRouterModule', () => {
  let settingsRouterModule: SettingsRouterModule;

  beforeEach(() => {
    settingsRouterModule = new SettingsRouterModule();
  });

  it('should create an instance', () => {
    expect(settingsRouterModule).toBeTruthy();
  });
});
