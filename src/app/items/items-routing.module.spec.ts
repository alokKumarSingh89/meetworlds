import { ItemsRoutingModule } from './items-routing.module';

describe('ItemsRoutingModule', () => {
  let itemsRoutingModule: ItemsRoutingModule;

  beforeEach(() => {
    itemsRoutingModule = new ItemsRoutingModule();
  });

  it('should create an instance', () => {
    expect(itemsRoutingModule).toBeTruthy();
  });
});
