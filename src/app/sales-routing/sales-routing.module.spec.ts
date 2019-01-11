import { SalesRoutingModule } from './sales-routing.module';

describe('SalesRoutingModule', () => {
  let salesRoutingModule: SalesRoutingModule;

  beforeEach(() => {
    salesRoutingModule = new SalesRoutingModule();
  });

  it('should create an instance', () => {
    expect(salesRoutingModule).toBeTruthy();
  });
});
