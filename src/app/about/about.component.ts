import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <main>
      <div class="about-container">
        <h1 class="about-h1">À propos de nous</h1>
        <p class="about-text">
          "Au petit village" est une entreprise artisanale qui se spécialise dans la confection de figurines inspirées de la célèbre bande dessinée "Astérix et Obélix". Fondée par des passionnés de la culture gauloise et de l'univers créé par René Goscinny et Albert Uderzo, cette entreprise met un point d'honneur à capturer l'essence et le charme des personnages emblématiques tels qu'Astérix, Obélix, Idéfix, ainsi que de nombreux autres habitants du petit village gaulois qui résiste encore et toujours à l'envahisseur romain.
          La cible principale de "Au petit village" est une population qui a grandi avec les aventures palpitantes des célèbres Gaulois. Ces personnes, souvent nostalgiques, recherchent des objets qui leur rappellent leur enfance et les moments passés à lire les bandes dessinées d'Astérix et Obélix. Les figurines, minutieusement détaillées et fabriquées avec des matériaux de haute qualité, sont conçues pour raviver les souvenirs et apporter une touche de magie et d'amusement à leur quotidien.
          En plus de leur aspect esthétique, les figurines de "Au petit village" sont également appréciées pour leur valeur sentimentale et leur capacité à créer des liens intergénérationnels. Elles sont souvent offertes en cadeau, que ce soit pour célébrer une occasion spéciale ou simplement pour faire plaisir à un amateur de la série. Grâce à leur engagement envers l'authenticité et la qualité, "Au petit village" réussit à captiver l'imagination de ses clients et à maintenir vivant l'héritage des aventures d'Astérix et Obélix pour les générations futures.
        </p>
        <img class="about-img" src="assets/img/about.jpg" alt="Diverses figurines d'Astérix et Obélix" />
      </div>
    </main> 
  `,
  styles: ``
})
export class AboutComponent {

}
