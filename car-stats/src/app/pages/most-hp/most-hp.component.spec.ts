import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostHPComponent } from './most-hp.component';

describe('MostHPComponent', () => {
  let component: MostHPComponent;
  let fixture: ComponentFixture<MostHPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostHPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostHPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
