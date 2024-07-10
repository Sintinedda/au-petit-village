import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="header-container" (window:resize)="onResize($event)">
      <div class="header-logo">
        <a routerLink="/home">
          <img src="assets/img/logo.jpg" class="header-img" alt="Logo Au petit village" priority/>
        </a>
      </div>
      <div class="menu-container"> 
        <ul class="menu">
          <li class="burger" (click)="toggleMenu()">
            <i class="material-symbols-outlined">{{ isMenuOpen ? "close" : "menu"}}</i>   
          </li>
          <li class="menu-items" [class.is-open]="isMenuOpen">
            <div class="menu-bar"></div>          
            <a class="menu-item" routerLink="/contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
            <div class="menu-bar"></div>          
            <a class="menu-item" routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">À propos</a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onResize(event: any) {
    event.target.innerWidth;
    this.isMenuOpen = false;
  }
}

