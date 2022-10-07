import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamesWebbComponent } from './james-webb.component';

describe('JamesWebbComponent', () => {
  let component: JamesWebbComponent;
  let fixture: ComponentFixture<JamesWebbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamesWebbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamesWebbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
