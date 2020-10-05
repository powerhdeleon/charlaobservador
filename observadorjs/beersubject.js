import Subject  from "./subject.js";

export default class BeerSubject extends Subject{
    constructor() {
        super();
        this.sale=false;
        this.promotion="";
    }

    create_sale(promotion) {
        this.sale = true;
        this.promotion = promotion;
        // Llama a los borrachos
        this.notify(this);
    }  
}
