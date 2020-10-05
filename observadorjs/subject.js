export default class Subject {
    constructor() {
        // los chismosos, interesados
        this.observers = [];
    }

    // subscribirse
    subscribe(o) {
        this.observers.push(o);
    }

    // Desuscribirse
    unsubscribe(o) {
        this.observers = this.observers.filter(e=> e!=o);
    }

    // Notificar
    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model);
        });
    }
}
