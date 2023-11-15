import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestGroundComponent } from './test-ground.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { ComponentsModule } from 'src/assets/shared/components/components.module';

@NgModule({
  declarations: [TestGroundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestGroundComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    ComponentsModule
  ],
})
export class TestGroundModule {}