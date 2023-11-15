import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { PageInfoService, PageLink } from 'src/app/_metronic/layout/core/page-info.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor(private pageInfo: PageInfoService) {
    pageInfo.updateBreadcrumbs(this.links);
  }

  async openModal() {
    return await this.modalComponent.open();
  }

  /* Breadcrumbs Override, need to decouple from sidemenu */
  links: Array<PageLink> = [{
    title: 'Home',
    path: '/search',
    isActive: false,
  }];

}
