import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SigninRequest } from '../types';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent {
  @Input() successPage!: string;
  @Output() onPlaceholder = new EventEmitter<any>();

  handlePlaceholder(event: any) {
    this.onPlaceholder.emit(event);
  }
}