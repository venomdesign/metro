import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { ComponentsModule } from 'src/assets/shared/components/components.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    ComponentsModule
  ],
})
export class SearchModule {}