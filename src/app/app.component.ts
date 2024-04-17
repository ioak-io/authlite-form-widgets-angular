import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthliteFormsWidgetsModule } from '../../projects/authlite-forms-widgets/src/lib/authlite-forms-widgets.module';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, RouterLink, AuthliteFormsWidgetsModule]
})
export class AppComponent {
  title = 'authlite-form-widgets-angular';
}
