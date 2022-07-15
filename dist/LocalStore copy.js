/** Hériter de possibilités de gestion des données */
export class LocalStore extends HTMLElement {
    constructor() {
        super();
    }
    /** Set data on localstorage */
    setStore(index, obj) {
        console.log(obj);
        if (!window.localStorage.getItem(index)) {
            window.localStorage.setItem(index, JSON.stringify(obj));
        }
        return 'Data sets';
    }
    /** Get data from localstorage */
    getStore(index) {
        if (index)
            return JSON.parse(window.localStorage.getItem(index));
    }
    /** Delete data on localstorage */
    delStore(index) {
        window.localStorage.removeItem(index);
        return 'Data deleted';
    }
}
