import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TablesComponent } from '../tables/tables.component';
//import { ModalConfig, ModalComponent } from 'src/app/_metronic/partials';

@Component({
  selector: 'vision-card',
  standalone: true,
  imports: [CommonModule, ButtonsComponent, TablesComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsComponent implements OnInit {
  @Input() ftr_btn_alignment?: string;
  @Input() titleIcon?: string;
  @Input() cardTitle?: string;
  @Input() cardSubTitle?: string;
  @Input() showHeaderBtns: boolean;
  @Input() showFooterBtns: boolean;

  // modalConfig: ModalConfig = {
  //   modalTitle: 'Modal title',
  //   dismissButtonLabel: 'Submit',
  //   closeButtonLabel: 'Cancel'
  // };
  
  ngOnInit(): void {
  }


  // @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}

  // async buttonClicked() {
  //   return await this.modalComponent.open();
  // }
  buttonClicked(){
    alert('Button Works');
  }
}
