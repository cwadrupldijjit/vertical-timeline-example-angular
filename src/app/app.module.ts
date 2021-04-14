import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { TimelineItemDirective } from './vertical-timeline/timeline-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    VerticalTimelineComponent,
    TimelineItemDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
