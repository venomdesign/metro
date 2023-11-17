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
  
  /** Buttons **/
  @Input() btnPrimary   : string;
  @Input() btnSecondary : string;
  @Input() btnSuccess   : string;
  @Input() btnDanger    : string;
  @Input() btnWarning   : string;
  @Input() btnInfo      : string;
  @Input() btnLight     : string;
  @Input() btnDark      : string;

  @Input() btnSize: string | 'sm';

  @Output() onClick = new EventEmitter<void>();

  ngOnInit() {
    this.btnPrimary    = 'btn btn-'+this.btnSize+ ' btn-primary';
    this.btnSecondary  = 'btn btn-'+this.btnSize+ ' btn-secondary';
    this.btnSuccess    = 'btn btn-'+this.btnSize+ ' btn-success';
    this.btnDanger     = 'btn btn-'+this.btnSize+ ' btn-danger';
    this.btnWarning    = 'btn btn-'+this.btnSize+ ' btn-warning';
    this.btnInfo       = 'btn btn-'+this.btnSize+ ' btn-info';
    this.btnLight      = 'btn btn-'+this.btnSize+ ' btn-light';
    this.btnDark       = 'btn btn-'+this.btnSize+ ' btn-dark';    
  }
  
  // buttonClicked(){
  //   if(!this.disabled){
  //     this.onClick.emit();
  //   }
  // }
}
