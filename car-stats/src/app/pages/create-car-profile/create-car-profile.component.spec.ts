import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarProfileComponent } from './create-car-profile.component';

describe('CreateCarProfileComponent', () => {
  let component: CreateCarProfileComponent;
  let fixture: ComponentFixture<CreateCarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
