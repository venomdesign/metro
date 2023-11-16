import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestGroundComponent } from './test-ground.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { ComponentsModule } from 'src/assets/shared/components/components.module';
import { FlipCardsModule } from 'src/assets/shared/components/flip-cards/flip-cards.module';
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
        ComponentsModule,
        FlipCardsModule,
    ]
})
export class TestGroundModule {}