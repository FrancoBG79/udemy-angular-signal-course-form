import { Component, computed, input, signal } from '@angular/core';
import { HttpEventType, httpResource } from '@angular/common/http';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'file-upload',
  templateUrl: 'file-upload.component.html',
  styleUrls: ['file-upload.component.scss'],
})
export class FileUploadComponent {
  readonly requiredFileType = input<string>('');

  readonly value = computed(() => this.uploadResource.value()?.url ?? null);
  readonly disabled = signal(false);

  fileName = signal('');

  private readonly fileData = signal<FormData | null>(null);

  private readonly uploadResource = httpResource<{ url: string }>(() => {
    const body = this.fileData();
    if (!body) return undefined;
    return {
      url: '/api/upload',
      method: 'POST',
      body,
      reportProgress: true,
    };
  });

  readonly uploadProgress = computed(() => {
    const progress = this.uploadResource.progress();
    if (!progress || progress.type !== HttpEventType.UploadProgress) return null;
    return progress.total ? Math.round(100 * progress.loaded / progress.total) : null;
  });

  readonly fileUploadError = computed(() => !!this.uploadResource.error());

  onClick(fileUpload: HTMLInputElement) {
    fileUpload.click();
  }

  onFileSelected(event: Event) {
    const file: File = (event.target as HTMLInputElement).files![0];
    if (!file) return;

    this.fileName.set(file.name);

    const formData = new FormData();
    formData.append('file', file);
    this.fileData.set(formData);
  }
}
