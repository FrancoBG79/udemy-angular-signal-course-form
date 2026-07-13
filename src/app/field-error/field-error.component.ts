import { Component, input } from '@angular/core';
import { ReadonlyFieldState } from '@angular/forms/signals';

@Component({
  selector: 'field-error',
  template: `
    <div class="err"></div>
  `
})
export class FieldErrorComponent {
  field = input.required<unknown>();
}
