import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalEventsComponent } from './historical-events.component';

describe('HistoricalEventsComponent', () => {
  let component: HistoricalEventsComponent;
  let fixture: ComponentFixture<HistoricalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
