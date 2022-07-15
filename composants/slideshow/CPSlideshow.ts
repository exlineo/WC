import { CustomHTML } from '../CustomHTML.js';
import { setStyle } from './CPSlideshow.style.js';

export class CPSlideshow extends CustomHTML {
  /** Liste des slides à afficher dans le HTML */
  slides:any;
  dots:any;
  shadow = this.attachShadow({ mode: 'open' });
  /** Hauteur du slider */
  h:string;
  /** Numéro du slide à en cours d'affichage */
  slide = 0;
  section:HTMLElement;
  nav:HTMLElement;
  
  constructor() {
    super();
    this.h = '500px';
    this.section = document.createElement('section');
    this.nav = document.createElement('nav');
  }
  /** Créer les slides (ou mettre en jour) */
  addSlides() {
    let index = 0;
    // Réinitialiser les données au cas d'une mise à jour
    if (this.getElementsByTagName('article')) {
      this.section.innerHTML = '';
      this.slide = 0;
    }
    // Traitement des données et création des slides
    this.slides = JSON.parse(this.dataset['slides']!);
    this.slides.forEach((s:any) => {
      let article = document.createElement('article');
      article.classList.add('fade');
      article.setAttribute("style", "background-image:url('" + s.img + "')");
      article.innerHTML = `
        <div class="numbertext">${index + 1} / ${this.slides.length}</div>
        <div class="text"><p>${s.legende}</p></div>
      `;
      this.section.appendChild(article);
      this.setDots(index);
      index++;
    });

    // Créer les boutons et afficher le contenu
    let prev = document.createElement('div');
    prev.classList.add('prev');
    prev.innerHTML = `
    <a class="arrow-up">
      <span class="left-arm"></span>
      <span class="right-arm"></span>
      <span class="arrow-slide"></span>
    </a>
    `;
    prev.addEventListener('click', () => this.afficheSlide(this.slide - 1));
    this.section.appendChild(prev);

    let next = document.createElement('div');
    next.classList.add('next');
    next.innerHTML = `
    <a class="arrow-up">
      <span class="left-arm"></span>
      <span class="right-arm"></span>
      <span class="arrow-slide"></span>
    </a>
    `;
    next.addEventListener('click', () => this.afficheSlide(this.slide + 1));
    this.section.appendChild(next);

    // Afficher la navigation par points et la section avec les articles
    this.shadow.appendChild(this.section);
    this.shadow.appendChild(this.nav);

    // Afficher le premier slide
    this.afficheSlide(0);
  }
  /** Points cliquables */
  setDots(n:any) {
    let span = document.createElement('span');
    span.classList.add('dot');
    span.addEventListener('click', () => {
      this.afficheSlide(n)
    });
    this.nav.appendChild(span);
  }
  /** Afficher le slide en cours */
  afficheSlide(n:any) {
    let slidesDOM = this.section.querySelectorAll("article");
    let dots = this.nav.querySelectorAll(".dot");

    if (n > slidesDOM.length-1) { this.slide = 0; }
    else if (n < 0) { this.slide = slidesDOM.length-1; }
    else {this.slide = n;};

    let i;
    for (i = 0; i < slidesDOM.length; i++) {
      slidesDOM[i].classList.remove('block');
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slidesDOM[this.slide].classList.add('block');
    dots[this.slide].className += " active";
  }

  /** Céer des styles dans l'éléement */
  setStyles() {
    let styles = document.createElement('style');
    styles.textContent = setStyle(this.params.h + 'px');
    this.shadow.appendChild(styles);
  }
}
customElements.define('cp-slideshow', CPSlideshow);