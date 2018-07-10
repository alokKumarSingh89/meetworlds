import { AppMatModule } from './app-mat.module';

describe('AppMatModule', () => {
  let appMatModule: AppMatModule;

  beforeEach(() => {
    appMatModule = new AppMatModule();
  });

  it('should create an instance', () => {
    expect(appMatModule).toBeTruthy();
  });
});
