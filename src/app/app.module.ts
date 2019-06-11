import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FullCalendarModule } from '@fullcalendar/angular';

import { AppComponent } from './app.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';
import { EventToolsComponent } from './components/event-components/event-tools/event-tools.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarComponent,
    EventToolsComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
