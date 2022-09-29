import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCraftsComponent } from './space-crafts.component';

describe('SpaceCraftsComponent', () => {
  let component: SpaceCraftsComponent;
  let fixture: ComponentFixture<SpaceCraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCraftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
