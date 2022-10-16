import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseCodeComponent } from './morse-code.component';

describe('MorseCodeComponent', () => {
  let component: MorseCodeComponent;
  let fixture: ComponentFixture<MorseCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorseCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
