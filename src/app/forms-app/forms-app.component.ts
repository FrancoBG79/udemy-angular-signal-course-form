import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'forms-app-root',
    templateUrl: './forms-app.component.html',
    styleUrls: ['./forms-app.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  title = 'app';
}
