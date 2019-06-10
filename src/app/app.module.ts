import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
