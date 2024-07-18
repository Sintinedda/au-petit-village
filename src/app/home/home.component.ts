import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, ProductsComponent], 
  template: `
    <main>
      <h1 class="home-h1">Au petit village</h1>
      <div class="home-about">
        <h2 class="home-h2">Présentation</h2> 
        <div class="home-about-txt-img">
          <p class="home-about-txt">Au Petit Village est une entreprise artisanale spécialisée dans la confection de figurines inspirées de la
          bande dessinée bien-aimée, Astérix et Obélix. Notre collection ravit les gens, qui retrouve avec plaisir la nostalgie des aventures
          des célèbres Gaulois. Chaque figurine est réalisée avec soin et passion, capturant l'esprit et l'humour inimitable des héros de notre
          enfance. Rejoignez-nous pour replonger dans cet univers magique et redécouvrir la joie des histoires intemporelles d'Astérix et Obélix.
          </p>
          <img src="assets/img/home-about.jpg" class="home-about-img" alt="Figurines Astérix & Obélix"/>
        </div>
        <button class="home-about-btn">
          <a class="home-about-link" routerLink="/about">À propos</a> 
        </button>
      </div>
      <div class="home-products">
        <h2 class="home-h2">Nos produits</h2>
          <div class="products">
            <app-products></app-products>
          </div>
      </div>
    </main>
  `,
  styles: ``
})

export class HomeComponent{
 
}
