import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceiveComponent } from './new-receive.component';

describe('NewReceiveComponent', () => {
  let component: NewReceiveComponent;
  let fixture: ComponentFixture<NewReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
