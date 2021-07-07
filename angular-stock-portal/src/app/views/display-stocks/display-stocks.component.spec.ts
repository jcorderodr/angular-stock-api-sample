import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStocksComponent } from './display-stocks.component';

describe('DisplayStocksComponent', () => {
  let component: DisplayStocksComponent;
  let fixture: ComponentFixture<DisplayStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
