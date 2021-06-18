import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpeedComponent } from './top-speed.component';

describe('TopSpeedComponent', () => {
  let component: TopSpeedComponent;
  let fixture: ComponentFixture<TopSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
