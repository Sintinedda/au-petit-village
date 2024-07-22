import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent],
  template: `
      <app-header></app-header>
      <main>
        <router-outlet />
      </main>
      <app-footer></app-footer> 
  `,
  styles: [],
})
export class AppComponent {
  
  title = 'Au-petit-village';

}
