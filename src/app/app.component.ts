import { Component } from '@angular/core';
import { TimelineItem } from './vertical-timeline/vertical-timeline.component';

interface TimelineItems extends TimelineItem {
  label: string;
  img?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  timelineValues: TimelineItems[] = [
    {
      date: new Date(2021, 2, 14),
      label: 'Pi day!',
    },
    {
      date: new Date(2021, 2, 15),
      label: 'Beware the Ides of March!',
    },
    {
      date: new Date(2021, 3, 15),
      label: 'Tax day!',
    },
    {
      date: new Date(2021, 6, 4),
      label: 'Happy Birthday, America!',
      img: 'https://live.staticflickr.com/7197/13298052224_7d9988e466_b.jpg',
    },
    {
      date: new Date(),
      label: 'Today!',
    }
  ];
}
