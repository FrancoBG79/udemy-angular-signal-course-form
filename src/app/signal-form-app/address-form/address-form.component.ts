import { Component, effect, input, model, output } from '@angular/core';
import { form, FormField, FormValueControl, FormRoot } from '@angular/forms/signals';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { ADDRESS_DEFAULT, AddressData } from './address.model';
import { addressSchema } from './address-form.setup';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  imports: [
    FormField, 
    FieldErrorComponent, 
    FormRoot
  ],
})
export class AddressFormComponent implements FormValueControl<AddressData> {
  readonly legend = input<string>('Address');

  readonly touch = output<void>()

  readonly value = model<AddressData>({ ...ADDRESS_DEFAULT });

  readonly form = form(this.value, addressSchema);

  constructor() {
    effect(() => { if(this.form().touched()) this.touch.emit(); });
  }
}
