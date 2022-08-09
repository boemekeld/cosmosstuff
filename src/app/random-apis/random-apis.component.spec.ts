import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomApisComponent } from './random-apis.component';

describe('RandomApisComponent', () => {
  let component: RandomApisComponent;
  let fixture: ComponentFixture<RandomApisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomApisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
