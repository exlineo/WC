/** Hériter de possibilités de gestion des données */
export class CPEvent extends HTMLElement {

    constructor() {
        super();
        this.addEventListener('CPErrorMsg', ev => this.setErrorMsg(ev));
        this.addEventListener('CPValidMsg', ev => this.setValidationMsg(ev));
        this.addEventListener('CPInfoMsg', ev => this.setInfoMsg(ev));
    }
    /** Throwing error message */
    setErrorEvent(msg: any) {
        this.dispatchEvent(new CustomEvent('CPErrorMsg', { detail: msg }));
    }
    /** Throwing validation message */
    setValidationEvent(msg: any) {
        this.dispatchEvent(new CustomEvent('CPErrorMsg', { detail: msg }));
    }
    /** Throwing error message */
    setInfoEvent(msg: any) {
        this.dispatchEvent(new CustomEvent('CPInfoMsg', { detail: msg }));
    }
    /** Set validation message */
    private setValidationMsg(ev: any) {
        console.log(ev.target, ev.detail);
    }
    /** Set error message */
    private setErrorMsg(ev: any) {
        console.log(ev.target, ev.detail);
    }
    /** Set info message */
    private setInfoMsg(ev: any) {
        console.log(ev.target, ev.detail);
    }
}