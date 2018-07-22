import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutditReportComponent } from './autdit-report.component';

describe('AutditReportComponent', () => {
  let component: AutditReportComponent;
  let fixture: ComponentFixture<AutditReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutditReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutditReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
