import { Component, OnInit } from '@angular/core';
import { PageInfoService, PageLink } from 'src/app/_metronic/layout/core/page-info.service';

@Component({
  selector: 'app-test-ground',
  templateUrl: './test-ground.component.html',
  styleUrls: ['./test-ground.component.scss']
})
export class TestGroundComponent implements OnInit {

  constructor(private pageInfo: PageInfoService) {
    pageInfo.updateTitle('Testing Ground');
    pageInfo.updateBreadcrumbs(this.links);
  }
  /* Breadcrumbs Override, need to decouple from sidemenu */
  links: Array<PageLink> = [{
    title: 'Home',
    path: '/search',
    isActive: false,
  }];


  ngOnInit(): void {
  }

}
