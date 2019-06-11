import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventToolsComponent } from './event-tools.component';

describe('EventToolsComponent', () => {
  let component: EventToolsComponent;
  let fixture: ComponentFixture<EventToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
