export default class BezaelObserver {
    notify(subject){
        console.log("Bezael se ha enterado de la promoción " + subject.promotion);
        if(subject.sale){
            console.log("Wow! voy por cerveza right now!");
        }
    }
}