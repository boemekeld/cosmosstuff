import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunriseSunsetComponent } from './sunrise-sunset.component';

describe('SunriseSunsetComponent', () => {
  let component: SunriseSunsetComponent;
  let fixture: ComponentFixture<SunriseSunsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunriseSunsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunriseSunsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
