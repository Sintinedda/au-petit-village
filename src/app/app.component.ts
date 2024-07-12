import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
  template: `
      <app-header></app-header>
      <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Au-petit-village';
}
