
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent {
  @Input() logo: any;
  @Input() placeholder: any;
}
