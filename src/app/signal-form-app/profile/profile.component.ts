import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { email, form, FormField, FormRoot, readonly, required } from '@angular/forms/signals';
import { AddressFormComponent } from '../address-form/address-form.component';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { PROFILE_DEFAULT, ProfileData } from './profile.model';
import { ProfileAvatarIconComponent, SaveIconComponent } from './profile-icons';
import { setupAddressField } from '../address-form/address-form.setup';
import { HasUnsavedChanges } from '../guards/has-unsaved-changed.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    FormField, 
    FormRoot, 
    AddressFormComponent, 
    FileUploadComponent, 
    ProfileAvatarIconComponent, 
    SaveIconComponent, 
    JsonPipe
  ],
})
export class ProfileComponent implements HasUnsavedChanges {

  profileModel = signal<ProfileData>({ ...PROFILE_DEFAULT });

  profileForm = form(this.profileModel, (schema) => {
    required(schema.avatarUrl, { message: 'Profile picture is required.'});
    required(schema.email, { message: 'Email is required.' });
    email(schema.email, { message: 'Enter a valid email address.' });
    readonly(schema.email);
    setupAddressField(schema.address);
  });

  hasUnsavedChanges() {
    return this.profileForm().dirty();
  }

}
