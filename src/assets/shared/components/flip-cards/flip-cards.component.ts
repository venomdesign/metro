import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }


}