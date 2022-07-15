import { CustomHTML } from '../CustomHTML.js';
import { setStyle } from './CPCaroussel.style.js';
export class CPCaroussel extends CustomHTML {
    constructor() {
        super();
        /** Liste des slides à afficher dans le HTML */
        this.slides = [];
        this.shadow = this.attachShadow({ mode: 'open' });
        /** Numéro du slide à en cours d'affichage */
        this.slideIndex = 0;
        /** HTML Elements to manipulate */
        this.main = document.createElement('main');
        this.section = document.createElement('section');
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
        this.data.forEach((s) => {
            var _a, _b;
            console.log(s);
            let article = document.createElement('article');
            article.style.backgroundImage = `url('${s.media.url}')`;
            article.innerHTML = `
          <div style="background-color:${(_a = s.style) === null || _a === void 0 ? void 0 : _a.bg}">
              <h3>${s.title}</h3>
              <h5>${(_b = s.subtitle) === null || _b === void 0 ? void 0 : _b.substring(0, 120)}...</h5>

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
    pagination(n) {
        if (n > 0 && this.slideIndex < this.data.length - 1) {
            this.slideIndex++;
        }
        else if (n < 0 && this.slideIndex > 0) {
            this.slideIndex--;
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
