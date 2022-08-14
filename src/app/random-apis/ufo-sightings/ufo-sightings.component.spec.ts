import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfoSightingsComponent } from './ufo-sightings.component';

describe('UfoSightingsComponent', () => {
  let component: UfoSightingsComponent;
  let fixture: ComponentFixture<UfoSightingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfoSightingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UfoSightingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
