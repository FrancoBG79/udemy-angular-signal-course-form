import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppLogoComponent } from './signal-form-app-logo.component';
import { AboutNavIconComponent, CoursesNavIconComponent, HamburgerIconComponent, UserNavIconComponent } from './signal-form-app-nav-icons';

@Component({
  selector: 'app-root',
  templateUrl: './signal-form-app.component.html',
  styleUrls: ['./signal-form-app.component.css'],
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AppLogoComponent, CoursesNavIconComponent, AboutNavIconComponent, UserNavIconComponent, HamburgerIconComponent]
})
export class AppComponent {
  navOpen = signal(false);
}
