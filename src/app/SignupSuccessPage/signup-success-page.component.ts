import { Component, EventEmitter, Input, Output } from '@angular/core';
import SignupRequest from '../types/SignupRequest';

@Component({
  selector: 'app-signup-success-page',
  templateUrl: './signup-success-page.component.html',
  styleUrls: ['./signup-success-page.component.scss'],
})
export class SignupSuccessPageComponent {
  @Input() heading!: string;
  @Input() children: any;
}
