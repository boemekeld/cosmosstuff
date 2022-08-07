import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsRoversComponent } from './mars-rovers.component';

describe('MarsRoversComponent', () => {
  let component: MarsRoversComponent;
  let fixture: ComponentFixture<MarsRoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsRoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
