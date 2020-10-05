export default class HectorObserver {
    notify(subject){
        console.log("Héctor se ha enterado de la promoción " + subject.promotion);
        if(subject.sale){
            console.log("Wow! que padre que hay cerveza, pero debo preguntarle a mi chica si me deja tomar");
        }
    }
}