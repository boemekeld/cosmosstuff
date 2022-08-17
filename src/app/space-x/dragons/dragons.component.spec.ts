import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsComponent } from './dragons.component';

describe('DragonsComponent', () => {
  let component: DragonsComponent;
  let fixture: ComponentFixture<DragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
