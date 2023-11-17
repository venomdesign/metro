import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';

  errorMessages: Record<string, string> = {
    required: 'This field is required.',
    email: 'The email address is invalid.'
  }

  constructor() { }

  ngOnInit(): void { }

}
