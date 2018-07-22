import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormateComponent } from './sample-formate.component';

describe('SampleFormateComponent', () => {
  let component: SampleFormateComponent;
  let fixture: ComponentFixture<SampleFormateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFormateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
