import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoscosmosComponent } from './roscosmos.component';

describe('RoscosmosComponent', () => {
  let component: RoscosmosComponent;
  let fixture: ComponentFixture<RoscosmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoscosmosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoscosmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
