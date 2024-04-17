import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-tagline',
  templateUrl: './tagline.component.html',
  styleUrls: ['./tagline.component.scss'],
})
export class TaglineComponent {
  @Input() title!: string;
  @Input() subtitle!: string;

  constructor() { }
}