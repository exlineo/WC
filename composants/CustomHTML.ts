import { LocalDB } from "./LocalDB.js";
/** Manipulate DOM */
export class CustomHTML extends LocalDB {
    constructor() {
        super();
    }
    /** Chek available value for prop update purpose */
    _upgradeProperty(prop: string) {
        if (this.hasOwnProperty(prop)) {
            //   let value = this[prop];
            //   delete this[prop];
            //   this[prop] = value;
        }
    }

    /** Set data for slides */
    getIndexData() {
        console.log(this.dataset['index']);
    }
    /** Send event for prop update */
    sendProp() {

    }
    /** Errors */
    sendError(){
        
    }
}