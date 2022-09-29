import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceTugsComponent } from './space-tugs.component';

describe('SpaceTugsComponent', () => {
  let component: SpaceTugsComponent;
  let fixture: ComponentFixture<SpaceTugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceTugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceTugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
