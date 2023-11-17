import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestGroundComponent } from './test-ground.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { ComponentsModule } from 'src/assets/shared/components/components.module';
import { FlipCardsModule } from 'src/assets/shared/components/flip-cards/flip-cards.module';
import { AccordionModule } from 'src/assets/shared/components/accordion/accordion.module';
import { InputModule } from 'src/assets/shared/components/input/input.module';
import { ChipsModule } from 'src/assets/shared/components/chips/chips.module';
import { FormsModule } from '@angular/forms';
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
        AccordionModule,
        InputModule,
        ChipsModule,
        FormsModule
    ]
})
export class TestGroundModule {}