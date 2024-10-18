import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-element-message',
  templateUrl: './form-element-message.component.html',
  styleUrls: ['./form-element-message.component.scss'],
})
export class FormElementMessageComponent {
  @Input() type!: 'error' | 'warning' | 'success' | 'info' | 'label';
  @Input() text: string = '';
  constructor() { }
}
