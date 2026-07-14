import { Component } from '@angular/core';

@Component({
  selector: 'sign-in-icon',
  template: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 17v-3H3v-4h7V7l5 5-5 5zm-1-2v1.5L14.5 12 9 7.5V9H2v6h7z"/>
      <path d="M20 3h-9v2h9v14h-9v2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/>
    </svg>
  `,
})
export class SignInIconComponent {}

@Component({
  selector: 'reset-icon',
  template: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
    </svg>
  `,
})
export class ResetIconComponent {}
