import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-form-element-message',
  templateUrl: './form-element-message.component.html',
  styleUrls: ['./form-element-message.component.scss'],
})
export class FormElementMessageComponent {
  @Input() email!: string;  
  @Input() password!: string;
  @Input() given_name!: string;
  @Input() family_name!: string;
  @Input() retype_password!: string;
  @Input() type!: 'error' | 'warning' | 'success' | 'info' | 'label';
  @Input() blankUsername!: string;
  @Input() blankPassword!: string;
  @Input() invalidUsername!: string;
  @Input() userNotFound!: string;
  @Input() incorrectPassword!: string;
  @Input() blankGivenname!: string;
  @Input() blankFamilyname!: string;
  @Input() blankRetypePassword!: string;
  @Input() RetypePasswordDoesnotmatch!: string;
}
