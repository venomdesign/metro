import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChipsComponent
  ]
})
export class ChipsModule { }