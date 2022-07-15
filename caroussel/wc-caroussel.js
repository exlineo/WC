/** Typer les données des slides */
// export interface ISlide {
//   img: string;
//   text: string;
//   title: string;
//   cornerImg?: string;
//   bgColor?:string;
//   url?:string;
// }

class WCCaroussel extends HTMLElement{
  /** Liste des slides à afficher dans le HTML */
  slides;
  shadow = this.attachShadow({mode: 'open'});
  /** Hauteur du slider */
  h;
  /** Numéro du slide à en cours d'affichage */
  slide = 0;

  static get observedAttributes() {
    return ['h', 'slides'];
  }

  constructor(s){
    super();
    this.slides = s;
    this.h = '500px';

    this.main = document.createElement('main');
    this.section = document.createElement('section');
  }
  /** Agir lorsque l'élément est initialisé */
  connectedCallback() {
    this.attributes.h ? this.h = this.attributes.h.value + 'px' : this.h = '500px';
    this.setStyles(); // Ajouter les styles des slides

    this.addSlides(); // Ajouter les slides à l'initialisation
  };
  /** Créer les slides (ou mettre en jour) */
  addSlides(){
    // Réinitialiser les données au cas d'une mise à jour
    if(this.getElementsByTagName('article')){
      this.main.innerHTML = '';
      this.slide = 0;
    }
    // Traitement des données et création des slides
    this.slides = JSON.parse(this.attributes.slides.value);
    this.slides.forEach(s => {
      let article = document.createElement('article');
      article.style.backgroundImage = `url('${s.img}')`;
      article.innerHTML = `
          <div style="background-color:${s.bgColor}">
              <h3>${s.title}</h3>
              <h5>${s.accroche.substring(0,120)}...</h5>

              <button href=${s.url}">voir plus</button>
          </div>
          <div>
            <img class="carousel-corner" src="${s.cornerImg}" alt="${s.title}" />
            <!-- <img class="carousel-img" src="${s.img}" alt="${s.title}"/> -->
          </div>
      `;
      this.section.appendChild(article)
    });
    // Créer les boutons et afficher le contenu
    let prev = document.createElement('div');
    prev.setAttribute('class', 'prev');
    prev.textContent = '>';
    prev.addEventListener('click', ()=>this.pagination(-1));
    this.main.appendChild(prev);
    // Ajouter les slides dans la section principale
    this.main.appendChild(this.section);

    let next = document.createElement('div');
    next.setAttribute('class', 'next');
    next.textContent = '>';
    next.addEventListener('click', ()=>this.pagination(1));
    this.main.appendChild(next);

    this.shadow.appendChild(this.main);
  }
  /** Info sur la déconnexion de l'élément */
  disconnectedCallback() {
    console.log('Le slider a été enlevé de la pge');
  }
  adoptedCallback() {
    console.log('Slider bougé ailleurs.');
  }
  /** Surveiller des infos */
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Attribut changé.', name, newValue);
    switch(name){
      case 'h':
        this.attributes.h ? this.h = this.attributes.h.value + 'px' : this.h = '500px';
        break;
      case 'slides':
        this.slides = JSON.parse(this.attributes.slides.value);
        break;
    }
  }
  /** Gérer l'affichage des slides. n = orientation (1, -1) */
  pagination(n){
    if(n > 0 && this.slide < this.slides.length-1){
      this.slide ++;
    } else if(n < 0 && this.slide > 0){
      this.slide --
    }
    // Positionner des éléments
    this.setPos();
  }
  /** Calculer la position du slide */
  setPos(){
    this.section.scroll({top:0, left:(this.section.offsetWidth * this.slide), behavior: 'smooth'});
  }
  /** Céer des styles dans l'éléement */
  setStyles(){
    let styles = document.createElement('style');
    styles.textContent = `
        main{
          margin:auto;
          position:relative;
          width:100%;
          height: ${this.h};
        }
        section {
            width: 100%;
            height: ${this.h};
            margin: auto;
            overflow:hidden;
            display:flex;
            flex-flow:row nowrap;
        }
        article{
          width:100%;
          height: ${this.h};
          display:flex;
          flex-shrink:0;

          margin:0;
          padding: 0;
          border:0;

          background-position: 100% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        article > div:nth-child(1){
          width:40%;
          display:flex;
          flex-flow:column nowrap;
          padding:20px 10px 20px 40px;
        }
        article > div:nth-child(2){
          width:60%;
          position:relative;
        }
        .prev, .next{
          color:white;
          background-color:rgba(0,0,0,.7);
          font-size:large;
          border:none;
          width:30px;
          height:30px;
          border-radius: 10%;
          transition:all .3s ease;
          line-height:30px;
          text-align:center;
          cursor:pointer;
          position:absolute;
          top:calc(50% - 15px);
          z-index:10;
        }
        .prev:hover, .next:hover{
          color:black;
          background-color:grey;
        }
        .prev{
          right:0;
        }
        .next{
          left:0;
          transform:rotate(180deg);
        }

        .carousel-corner {
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .carousel-img {
            object-fit: cover;
        }
  `;
  this.shadow.appendChild(styles);
  }
}

customElements.define('wc-caroussel', WCCaroussel);
