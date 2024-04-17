import { Component, Input } from '@angular/core';
import ThemeType from '../../types/ThemeType';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() theme: ThemeType = ThemeType.default;
}