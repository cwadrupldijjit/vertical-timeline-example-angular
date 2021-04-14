import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TimelineItemDirective } from './timeline-item.directive';

export interface TimelineItem {
  date: Date;
}

@Component({
  selector: 'app-vertical-timeline',
  templateUrl: './vertical-timeline.component.html',
  styleUrls: ['./vertical-timeline.component.scss']
})
export class VerticalTimelineComponent implements OnInit {
  @Input() items: TimelineItem[];
  @ContentChild(TimelineItemDirective) itemDirective: TimelineItemDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
