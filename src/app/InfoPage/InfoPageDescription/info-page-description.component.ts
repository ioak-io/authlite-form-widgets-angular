import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-page-description',
  templateUrl: './info-page-description.component.html',
  styleUrls: ['./info-page-description.component.scss']
})
export class InfoPageDescriptionComponent {
    @Input() children: any;
}