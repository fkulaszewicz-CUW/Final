import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarProfileComponent } from './update-car-profile.component';

describe('UpdateCarProfileComponent', () => {
  let component: UpdateCarProfileComponent;
  let fixture: ComponentFixture<UpdateCarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCarProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
