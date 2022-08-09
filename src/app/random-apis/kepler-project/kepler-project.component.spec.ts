import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeplerProjectComponent } from './kepler-project.component';

describe('KeplerProjectComponent', () => {
  let component: KeplerProjectComponent;
  let fixture: ComponentFixture<KeplerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeplerProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeplerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
