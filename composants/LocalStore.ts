import { ParamsI } from "./caroussel/models/Interfaces.js";
import { CPEvent } from "./CPEvent.js";

/** Hériter de possibilités de gestion des données */
export class LocalStore extends CPEvent {

    data: any; // Temporary data to read/write
    params!: ParamsI; // Config parameters send from HTML
    index: string = ''; // Name of index of datas to sync from localstorage

    constructor() {
        super();
        this.index = this.dataset['index'] as string; // Get index of data in dataset
        let p = this.dataset['params']!;
        console.log( typeof p, p, this.index, this.getStore(this.index)!);
        this.params = JSON.parse(this.dataset['params'] as string); // Get configuration parameters
        this.data = JSON.parse(this.getStore(this.index)!); // Get datas in local storage
        /** Sync data from local storage to get any change */
        window.addEventListener('storage', () => {
            console.log(this.index, JSON.parse(window.localStorage.getItem(this.index)!));
        });
    }
    /** Set data on localstorage */
    async setStore(index: string, obj: any) {
        if (!window.localStorage.getItem(index)) {
            await window.localStorage.setItem(index, JSON.stringify(obj));
        }
        return 'Data sets';
    }
    /** Get data from localstorage */
    getStore(index: string) {
        try {
            return window.localStorage.getItem(index);
        } catch (er) {
            this.setErrorEvent(er);
            return;
        }
    }
    /** Delete data on localstorage */
    delStore(index: string) {
        window.localStorage.removeItem(index);
        return 'Data deleted';
    }
    //// EVENTS ON WEB COMPONENT ////
    /** Web component initiate */
    connectedCallback() {
        this.setInit();
    };
    /** Surveiller des infos */
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('Attribut changé.', name, newValue, this.index);
        switch (name) {
            case 'data-param':
                try {
                    this.params = JSON.parse(this.getStore(newValue)!);
                }
                catch (er) {
                    this.setErrorEvent(er);
                };
                break;
            case 'data-index':
                try {
                    this.data = JSON.parse(this.getStore(newValue)!);
                }
                catch (er) {
                    this.setErrorEvent(er);
                };
                break;
        }
    }
    /** Info sur la déconnexion de l'élément */
    disconnectedCallback() {
        console.log('Le slideshow a été enlevé de la page');
    }
    adoptedCallback() {
        console.log('Slideshow bougé ailleurs.');
    }
    static get observedAttributes() {
        return ['data-params', 'data-index'];
    }
}