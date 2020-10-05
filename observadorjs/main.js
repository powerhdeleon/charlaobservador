import BeerSubject from "./beersubject.js";
import BezaelObserver from "./bezaelobserver.js";

export var beer = new BeerSubject();

var bezael = new BezaelObserver();

beer.subscribe(bezael);



