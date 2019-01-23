import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedDetailsComponent } from './received-details.component';

describe('ReceivedDetailsComponent', () => {
  let component: ReceivedDetailsComponent;
  let fixture: ComponentFixture<ReceivedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
