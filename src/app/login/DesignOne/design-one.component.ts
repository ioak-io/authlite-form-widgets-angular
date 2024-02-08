import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-design-one',
  templateUrl: './design-one.component.html',
  styleUrls: ['./design-one.component.scss'],
})
export class DesignOneComponent{
  @Input() logo: any;
}