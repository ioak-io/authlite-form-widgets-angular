import { Component, Input } from '@angular/core';
import PageView from '../types/PageViewType';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent {
  @Input() successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' = 'signin';
  @Input() signinheading!: string;
  @Input() signupheading!: string;
  @Input() forgotpasswordheading!: string;
  @Input() resendverifyemailheading!: string;

  @Input() signindescription!: string;
  @Input() signupdescription!: string;
  @Input() forgotpassworddescription!: string;
  @Input() resendverifyemaildescription!: string;

  @Input() signinfootnote!: string;
  @Input() signupfootnote!: string;
  @Input() forgotpasswordfootnote!: string;
  @Input() resendverifyemailfootnote!: string;

  @Input() children: any;

  ngOnChanges() {
    console.log(this.successPage);
  }

}