import { Component } from '@angular/core';

@Component({
  selector: 'create-course-hero-icon',
  template: `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6 12H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1V18z"/>
    </svg>
  `,
})
export class CreateCourseHeroIconComponent {}

@Component({
  selector: 'arrow-right-icon',
  template: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>
  `,
})
export class ArrowRightIconComponent {}

@Component({
  selector: 'arrow-left-icon',
  template: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  `,
})
export class ArrowLeftIconComponent {}

@Component({
  selector: 'check-icon',
  template: `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  `,
})
export class CheckIconComponent {}
