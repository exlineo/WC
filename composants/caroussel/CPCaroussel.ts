import { CustomHTML } from '../CustomHTML.js';
import { SlideI } from './models/Interfaces.js';
import { setStyle } from './CPCaroussel.style.js';

export class CPCaroussel extends CustomHTML {
  /** Liste des slides à afficher dans le HTML */
  slides: Array<SlideI> = [];
  shadow = this.attachShadow({ mode: 'open' });
  /** Numéro du slide à en cours d'affichage */
  slideIndex = 0;
  /** HTML Elements to manipulate */
  main: HTMLElement = document.createElement('main');
  section: HTMLElement = document.createElement('section');

  constructor() {
    super();
    this.addEventListener('init', this.init);
  }
  /** Component initialisation */
  init() {
    this.setStyles(); // Ajouter les styles des slides
    // Réinitialiser les données au cas d'une mise à jour
    if (this.getElementsByTagName('article')) {
      this.main.innerHTML = '';
      this.slideIndex = 0;
    }
    this.addSlides();
  }
  /** Créer les slides (ou mettre en jour) */
  addSlides() {

    this.data.forEach((s: SlideI) => {
      console.log(s);
      let article = document.createElement('article');
      article.style.backgroundImage = `url('${s.media.url}')`;
      article.innerHTML = `
          <div style="background-color:${s.style?.bg}">
              <h3>${s.title}</h3>
              <h5>${s.subtitle?.substring(0, 120)}...</h5>

              <button part="button" href=${s.media.url}">+</button>
          </div>
      `;
      this.section.appendChild(article);
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
    prev.addEventListener('click', () => this.pagination(-1));
    this.main.appendChild(prev);

    // Ajouter les slides dans la section principale
    this.main.appendChild(this.section);

    let next = document.createElement('div');
    next.classList.add('next');
    next.innerHTML = `
    <a class="arrow-up">
      <span class="left-arm"></span>
      <span class="right-arm"></span>
      <span class="arrow-slide"></span>
    </a>
    `;
    next.addEventListener('click', () => this.pagination(1));
    this.main.appendChild(next);

    this.shadow.appendChild(this.main);
  }
  /** Gérer l'affichage des slides. n = orientation (1, -1) */
  pagination(n: number) {
    if (n > 0 && this.slideIndex < this.data.length - 1) {
      this.slideIndex++;
    } else if (n < 0 && this.slideIndex > 0) {
      this.slideIndex--
    }
    // Positionner des éléments
    this.setPos();
  }
  /** Calculer la position du slide */
  setPos() {
    this.section.scroll({ top: 0, left: (this.section.offsetWidth * this.slideIndex), behavior: 'smooth' });
  }
  /** Céer des styles dans l'éléement */
  setStyles() {
    let styles = document.createElement('style');
    styles.textContent = setStyle(this.params.h);
    this.shadow.appendChild(styles);
  }
}
/** Define WebComponent */
customElements.define('cp-caroussel', CPCaroussel);
