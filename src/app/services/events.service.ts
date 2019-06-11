import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as apiConfig from './service-config.json';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  apiKeyString: any = apiConfig[0];
  holidaysUrl = 'https://calendarific.com/api/v2/holidays';

  constructor(private http: HttpClient) { }

  getHolidays(): Observable<any> {

    return this.http.get<any>(this.holidaysUrl);

  }

  newEvent() {

  }

}
