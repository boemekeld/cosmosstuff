import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodNasaComponent } from './apod-nasa.component';

describe('ApodNasaComponent', () => {
  let component: ApodNasaComponent;
  let fixture: ComponentFixture<ApodNasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodNasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
