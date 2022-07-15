/** Hériter de possibilités de gestion des données */
export class CPError extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('CPErrorMsg', ev => this.setErrorMsg(ev));
        this.addEventListener('CPValidMsg', ev => this.setValidationMsg(ev));
        this.addEventListener('CPInfoMsg', ev => this.setInfoMsg(ev));
    }
    /** Throwing error message */
    setErrorEvent(msg) {
        this.dispatchEvent(new CustomEvent('CPErrorMsg', { detail: msg }));
    }
    /** Throwing validation message */
    setValidationEvent(msg) {
        this.dispatchEvent(new CustomEvent('CPErrorMsg', { detail: msg }));
    }
    /** Throwing error message */
    setInfoEvent(msg) {
        this.dispatchEvent(new CustomEvent('CPInfoMsg', { detail: msg }));
    }
    /** Set validation message */
    setValidationMsg(ev) {
        console.log(ev.target, ev.detail);
    }
    /** Set error message */
    setErrorMsg(ev) {
        console.log(ev.target, ev.detail);
    }
    /** Set info message */
    setInfoMsg(ev) {
        console.log(ev.target, ev.detail);
    }
}
