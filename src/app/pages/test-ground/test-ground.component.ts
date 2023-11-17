import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageInfoService, PageLink } from 'src/app/_metronic/layout/core/page-info.service';

@Component({
  selector: 'app-test-ground',
  templateUrl: './test-ground.component.html',
  styleUrls: ['./test-ground.component.scss']
})
export class TestGroundComponent {
  formGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  items = ['One', 'two', 'three'];
  
  constructor(private pageInfo: PageInfoService) {
    pageInfo.updateTitle('Testing Ground');
    pageInfo.updateBreadcrumbs(this.links);

    this.formGroup.valueChanges.subscribe((val) => console.log(this.formGroup));
  }
  /* Breadcrumbs Override, need to decouple from sidemenu */
  links: Array<PageLink> = [{
    title: 'Home',
    path: '/search',
    isActive: false,
  }];

  

}
