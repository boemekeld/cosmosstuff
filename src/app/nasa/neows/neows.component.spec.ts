import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeowsComponent } from './neows.component';

describe('NeowsComponent', () => {
  let component: NeowsComponent;
  let fixture: ComponentFixture<NeowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
