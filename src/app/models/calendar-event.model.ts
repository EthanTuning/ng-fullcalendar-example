import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class CalendarEvent {

    constructor(public title: string, public date: any[]) { }

}

@Injectable({
    providedIn: 'root'
})

export class CalendarEventAdapter implements Adapter<CalendarEvent> {

    adapt(item: any): CalendarEvent {

        return new CalendarEvent (item.name, item.date['iso']);

    }

}
