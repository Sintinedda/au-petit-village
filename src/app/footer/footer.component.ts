import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container">
        <div class="footer-lists">
          <div class="footer-items">
            <ul class="footer-items-list">
              <li class="footer-item"><a routerLink="/home" class="footer-link">Accueil</a></li>
              <li class="footer-item"><a routerLink="/about" class="footer-link">À propos</a></li>
              <li class="footer-item"><a routerLink="/home" fragment="products" class="footer-link">Nos produits</a></li>
              <li class="footer-item"><a routerLink="/contact" class="footer-link">Nous contacter</a></li> 
            </ul>
          </div>
          <div class="footer-contacts">
            <ul class="footer-contacts-list">
              <li class="footer-contact-title">Contact<li>
              <li class="footer-contact">
                <span class="material-symbols-outlined footer-symbol">explore_nearby</span>
                <a class="footer-link" href="https://www.google.fr/maps/place/Av.+Mar%C3%A9chal+Lyautey,+20090+Ajaccio/@41.9379198,8.7422233,17z/data=!3m1!4b1!4m6!3m5!1s0x12da69812a2ae02b:0x3be50d500d37db0d!8m2!3d41.9379198!4d8.7448036!16s%2Fg%2F1wjwxqvw?entry=ttu" target="_blank">
                  <address class="footer-contact-address">
                    Avenue Maréchal Lyautey<br/>
                    20090 Ajaccio, Corse-du-Sud
                  </address>
                </a>
              </li>
              <li class="footer-contact">
                <span class="material-symbols-outlined footer-symbol">call</span>
                <a href="tel:0495515303" class="footer-contact-tel footer-link">0495515303</a>
              </li>
              <li class="footer-contact">
                <span class="material-symbols-outlined footer-symbol">mail</span>
                <a class="footer-contact-mail footer-link" href="mailto: aupetitvillage@gmail.com">aupetitvillage&#64;gmail.com</a>
              </li> 
            </ul>
          </div>
        </div>
        <div class="footer-icons">
          <a href="https://www.facebook.com/Jerem.Sinti" target="_blank">
            <img class="footer-icon" src="assets/img/socialnetwork/logoFacebook.jpg"/>
          </a>
          <a href="https://twitter.com/Sintine2da" target="_blank">
            <img class="footer-icon" src="assets/img/socialnetwork/logoX.png"/>
          </a> 
        </div> 
      </div>
    </footer> 
  `,
  styles: ``
})
export class FooterComponent {

}
