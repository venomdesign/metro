import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalConfig, ModalsModule } from 'src/app/_metronic/partials';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'vision-to-do',
  standalone: true,
  imports: [CommonModule, ModalsModule, CardsComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  modalConfig: ModalConfig = {
    modalTitle: 'Add To-Do Item',
    dismissButtonLabel: 'Cancel',
    closeButtonLabel: 'Save'
  };
  @ViewChild('toDoModal') private modalComponent: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }
  async open() {
    return await this.modalComponent.open();
  }
}
