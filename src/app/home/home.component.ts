import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], 
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
        <div class="home-products-sort-search">
          <div class="home-products-sort">
            <p class="home-products-sort-txt">Tri par prix</p>
            <div class="home-products-sort-icons">
              <button class="home-products-sort-btn material-symbols-outlined">arrow_downward</button>
              <button class="home-products-sort-btn material-symbols-outlined">arrow_upward</button>
            </div>
          </div>
          <div class="home-products-search">
            <input type="text" class="home-products-search-input" placeholder="Rechercher"/> 
            <button class="home-products-search-btn material-symbols-outlined">search</button>  
          </div>
        </div>
        <ul class="home-products-items" id="products"></ul> 
      </div>
    </main>
  `,
  styles: ``
})

export class HomeComponent{
 
}
