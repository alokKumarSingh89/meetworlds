import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyCashComponent } from './pretty-cash.component';

describe('PrettyCashComponent', () => {
  let component: PrettyCashComponent;
  let fixture: ComponentFixture<PrettyCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
