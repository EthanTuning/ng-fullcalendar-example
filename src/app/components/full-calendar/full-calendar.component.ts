import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventsService } from '../../services/events.service';

@Component({

  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']

})

export class FullCalendarComponent implements OnInit {

  holidayEvents = [];
  calendarPlugins = [dayGridPlugin];
  calendarEvents = [];

  constructor(private eventsSerivce: EventsService) { }

  ngOnInit() {

    this.eventsSerivce.getHolidayEvents().subscribe(holidayEvents => {

      this.holidayEvents = holidayEvents;
      console.log(this.holidayEvents);

    });

  }

}
