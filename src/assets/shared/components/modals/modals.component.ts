import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
