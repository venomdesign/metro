import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { PageInfoService, PageLink } from 'src/app/_metronic/layout/core/page-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor(private pageInfo: PageInfoService) {
    pageInfo.updateTitle('Dashboards');
    pageInfo.updateBreadcrumbs(this.links);
  }
  /* Breadcrumbs Override, need to decouple from sidemenu */
  links: Array<PageLink> = [{
    title: 'Home',
    path: '/search',
    isActive: false,
  }];
  async openModal() {
    return await this.modalComponent.open();
  }
}
