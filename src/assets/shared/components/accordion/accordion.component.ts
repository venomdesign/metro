import { Component } from '@angular/core';

@Component({
  selector: 'accordion',
  template: `
    <div class="accordion-item"><ng-content select="accordion-item"></ng-content></div>
  `,
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  constructor() { }

}
