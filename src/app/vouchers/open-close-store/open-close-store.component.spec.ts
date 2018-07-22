import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseStoreComponent } from './open-close-store.component';

describe('OpenCloseStoreComponent', () => {
  let component: OpenCloseStoreComponent;
  let fixture: ComponentFixture<OpenCloseStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCloseStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
