import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleStoreComponent } from './store.component';

describe('SaleStoreComponent', () => {
  let component: SaleStoreComponent;
  let fixture: ComponentFixture<SaleStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
