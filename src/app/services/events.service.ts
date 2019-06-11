import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CalendarEvent, CalendarEventAdapter } from '../models/calendar-event.model';
import apiConfig from './service-config.json';

@Injectable({

  providedIn: 'root'

})

export class EventsService {

  apiKeyString: any = apiConfig.apiKey;
  holidaysUrl = 'https://calendarific.com/api/v2/holidays';

  constructor(private http: HttpClient, private adapter: CalendarEventAdapter) { }

  getHolidayEvents(): Observable<CalendarEvent[]> {

    return this.http.get<CalendarEvent[]>(this.holidaysUrl, {

      params: {

        api_key: this.apiKeyString,
        country: 'US',
        year: '2019'

      }

    }).pipe(

      map((data: any[]) => data['response']['holidays'].map(item => this.adapter.adapt(item))),

    );
  }

}
