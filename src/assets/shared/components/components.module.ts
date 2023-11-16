import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { DropdownMenusModule, ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ModalsComponent } from './modals/modals.component';
import { TablesComponent } from './tables/tables.component';
import { ToDoComponent } from './to-do/to-do.component';
import { FlipCardsModule } from './flip-cards/flip-cards.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    DropdownMenusModule,
    InlineSVGModule,
    ModalsModule,
    NgApexchartsModule,
    NgbDropdownModule,
    FullCalendarModule,
    ButtonsComponent,
    CardsComponent,
    CalendarComponent,
    ModalsComponent,
    TablesComponent,
    ToDoComponent,
    FlipCardsModule
  ],
  exports: [
    ButtonsComponent,
    CardsComponent,
    CalendarComponent,
    FullCalendarModule,
    ModalsComponent,
    TablesComponent,
    ToDoComponent
  ],
})
export class ComponentsModule {}










