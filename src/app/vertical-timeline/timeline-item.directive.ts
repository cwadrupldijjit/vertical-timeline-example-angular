import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTimelineItem]'
})
export class TimelineItemDirective {
  constructor(
    public template: TemplateRef<any>
  ) {}
}
