import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as apiConfig from './service-config.json';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  apiKeyString: any =  '?api_key=' + apiConfig[0];
  holidaysUrl = 'https://calendarific.com/api/v2';

  constructor(private http: HttpClient) { }

  getHolidays(): Observable<any> {

    return this.http.get<any>(`${ this.holidaysUrl }`);

  }

  newEvent() {

  }

}
