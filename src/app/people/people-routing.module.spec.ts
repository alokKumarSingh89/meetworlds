import { PeopleRoutingModule } from './people-routing.module';

describe('PeopleRoutingModule', () => {
  let peopleRoutingModule: PeopleRoutingModule;

  beforeEach(() => {
    peopleRoutingModule = new PeopleRoutingModule();
  });

  it('should create an instance', () => {
    expect(peopleRoutingModule).toBeTruthy();
  });
});
