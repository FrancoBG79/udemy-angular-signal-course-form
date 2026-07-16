import {Component, ChangeDetectionStrategy, input, inject} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import { of } from 'rxjs';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';


@Component({
    selector: 'file-upload',
    templateUrl: "file-upload.component.html",
    styleUrls: ["file-upload.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: FileUploadComponent
      },
      {
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: FileUploadComponent
      }
    ]
})
export class FileUploadComponent implements ControlValueAccessor, Validator {
  requiredFileType = input<string>();

  fileName = '';
  fileUploadError = false;
  fileUploadSuccess = false;
  uploadProgress: number;
  onChange = (fileName: string) => {};
  onTouch = () => {};
  onValidatorChange = () => {};
  disabled: boolean = false;
  private http = inject(HttpClient)

  onFileSelected(event: Event) {
    const file: File = (event.target as HTMLInputElement).files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);

      this.http.post('/api/upload', formData, { reportUploadProgress: true, observe: 'events' })
        .pipe(
          catchError(error => {
            this.fileUploadError = !!error;
            return of(error)
          }),
          finalize(() => {
            this.uploadProgress = null;
          })
        )
        .subscribe(event => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (event.loaded / event.total))
          } else if (event.type == HttpEventType.Response) {
            this.fileUploadSuccess = true;
            this.onChange(this.fileName);
            this.onValidatorChange();
          } 
        });
    }
  }

  onClick(fileUpload: HTMLInputElement) {
    this.onTouch();
    fileUpload.click();
  }

  writeValue(value: any): void {
    this.fileName = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch: any): void {
    this.onTouch = onTouch;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.fileUploadSuccess) {
      return null;
    }

    let errors: any = {
      requiredFileType:  this.requiredFileType
    }

    if (this.fileUploadError) {
      errors.uploadFailed = true;
    }
    return errors;
  }

  registerOnValidatorChange?(onValidatorChange: () => void): void {
    this.onValidatorChange = onValidatorChange;
  }
}
