import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStocksDetailComponent } from './display-stocks-detail.component';

describe('DisplayStocksDetailComponent', () => {
  let component: DisplayStocksDetailComponent;
  let fixture: ComponentFixture<DisplayStocksDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStocksDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStocksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
