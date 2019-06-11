import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})

export class FullCalendarComponent implements OnInit {

  events = [];
  calendarPlugins = [dayGridPlugin];

  constructor(private eventsSerivce: EventsService) { }

  ngOnInit() {

    this.eventsSerivce.getHolidays().subscribe(events => {

      this.events = events;

    });

  }

}
