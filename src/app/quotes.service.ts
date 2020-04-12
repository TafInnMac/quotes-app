import { Injectable, EventEmitter } from '@angular/core';
import { Quote } from './quote-board/quote-block/quote.model';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  quotes: Quote[] = [
    new Quote('Dave', 'Yes, green lights are good'),
    new Quote('Chris', 'With my headache today, I can believe in everything!'),
    new Quote('Chris', "Did you do any shopping's lately?"),
    new Quote('Sean Adams', "Scary massive balls flying about"),
  ];

  newQuoteAdded = new EventEmitter<Quote>();

  constructor() { }

  addQuote(newQuote: Quote) {
    this.quotes.push(newQuote);    
  };
}
