import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipsComponent), //import from core not compiler
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush //import from core not compiler
})
export class ChipsComponent {
  items: string[] = [];

  @Input() placeholder = 'Type...';
  @Input() removeable = true;
  @ViewChild('inputField') inputField: any;

  onChange: Function = () => {};
  onTouched: Function = () => {};

  constructor(private cd: ChangeDetectorRef) { }

  onChipBarClick() {
    this.inputField.nativeElement.focus();
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.triggerChange();
  }

  removeAll(): void {
    this.items = [];
    this.triggerChange();
  }

  onKeyDown(event: any, value: string): void {
    switch (event.keyCode) {
      case 13:
      case 118: {
        if(value && value.trim() !== ''){
          if(!this.items.includes(value)){
            //this.items.push();
            this.items = [...this.items, value];
            this.triggerChange();
          }
          this.inputField.nativeElement.value = '';
          event.preventDefault();
        }
        break;
      }
      case 8: {
        if(!value && this.items.length > 0) {
          this.items.pop();
          this.items = [...this.items];
          this.triggerChange();
        }
        break;
      }
      default: 
      break;
    }
  }

  writeValue(value: any): void {
    this.items = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  triggerChange(): void {
    this.onChange(this.items);
  }
}
