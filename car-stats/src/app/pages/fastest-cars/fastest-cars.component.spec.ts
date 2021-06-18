import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastestCarsComponent } from './fastest-cars.component';

describe('FastestCarsComponent', () => {
  let component: FastestCarsComponent;
  let fixture: ComponentFixture<FastestCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastestCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastestCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
