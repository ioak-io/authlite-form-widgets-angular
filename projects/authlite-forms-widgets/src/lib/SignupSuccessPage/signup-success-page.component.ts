import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-signup-success-page',
  templateUrl: './signup-success-page.component.html',
  styleUrls: ['./signup-success-page.component.scss'],
})
export class SignupSuccessPageComponent {
  @Input() heading: string = '';
  @Input() children: any;
}
