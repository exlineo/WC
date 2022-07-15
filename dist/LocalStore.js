import { CPEvent } from "./CPEvent.js";
/** Hériter de possibilités de gestion des données */
export class LocalStore extends CPEvent {
    constructor() {
        super();
        this.index = ''; // Name of index of datas to sync from localstorage
        /** Sync data from local storage to get any change */
        window.addEventListener('storage', () => {
            console.log(this.index, JSON.parse(window.localStorage.getItem(this.index)));
        });
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
        try {
            return JSON.parse(window.localStorage.getItem(index));
        }
        catch (error) {
        }
    }
    /** Delete data on localstorage */
    delStore(index) {
        window.localStorage.removeItem(index);
        return 'Data deleted';
    }
}
