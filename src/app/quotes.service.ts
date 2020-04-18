import { Injectable } from '@angular/core';
import { Quote } from './quote-board/quote-block/quote.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  quotes: Quote[] = [
    new Quote('Dave', 'Yes, green lights are good'),
    new Quote('Chris', 'With my headache today, I can believe in everything!'),
    new Quote('Chris', "Did you do any shopping's lately?"),
    new Quote('Sean Adams', "Scary massive balls flying about"),
    new Quote('Chris', "It's not gonna sting me if I'm not gonna squeeze it")
  ];

  newQuoteAdded = new Subject<Quote>();

  constructor() { }

  addQuote(newQuote: Quote) {
    this.quotes.push(newQuote);    
  };
}
