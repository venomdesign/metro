import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vision-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  @Input() label?: string | '';
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() ariaLabel?: string;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  @Input() size?: string;
  @Output() onClick = new EventEmitter<void>();

  // buttonClicked(){
  //   if(!this.disabled){
  //     this.onClick.emit();
  //   }
  // }
}
