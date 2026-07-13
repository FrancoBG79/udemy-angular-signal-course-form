import { Component, input, model } from '@angular/core';
import { FieldTree, form, FormField, FormValueControl, pattern, required } from '@angular/forms/signals';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { ADDRESS_DEFAULT, AddressData } from './address.model';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  imports: [FormField, FieldErrorComponent],
})
export class AddressFormComponent {
  readonly legend = input<string>('Address');

  readonly value = model<AddressData>({ ...ADDRESS_DEFAULT });
}
