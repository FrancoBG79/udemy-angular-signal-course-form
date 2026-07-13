import { Component } from '@angular/core';

@Component({
  selector: 'courses-nav-icon',
  template: `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 5h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"/>
    </svg>
  `,
})
export class CoursesNavIconComponent {}

@Component({
  selector: 'about-nav-icon',
  template: `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
  `,
})
export class AboutNavIconComponent {}

@Component({
  selector: 'user-nav-icon',
  template: `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  `,
})
export class UserNavIconComponent {}

@Component({
  selector: 'hamburger-icon',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <rect y="3" width="20" height="2" rx="1"/>
      <rect y="9" width="20" height="2" rx="1"/>
      <rect y="15" width="20" height="2" rx="1"/>
    </svg>
  `,
})
export class HamburgerIconComponent {}
