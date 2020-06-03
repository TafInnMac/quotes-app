import { Injectable, ViewChild } from '@angular/core';
import { Quote } from './quote-board/quote-block/quote.model';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  quotes: Quote[] = [
    new Quote('Dave', 'Yes, green lights are good', new Date()),
    new Quote('Chris', 'With my headache today, I can believe in everything!', new Date()),
    new Quote('Chris', "Did you do any shopping's lately?", new Date()),
    new Quote('Sean Adams', "Scary massive balls flying about", new Date()),
    new Quote('Chris', "It's not gonna sting me if i'm not gonna squeeze it", new Date()),
    new Quote('Chris', "His naked photos are only worth for third place", new Date()),
    new Quote('Osama', "The guy got corona. Corona got scared of him", new Date()),
    new Quote('Sean', "If it's really windy, look at your toilet", new Date()),
    new Quote('Liam', "If a mile is 5 miles", new Date()),
    new Quote('Chris', "I was gonna ask you. Should I touch it?", new Date()),
    new Quote('Sean', "It's either I carry on and look like Jesus...", new Date()),
    new Quote('Chris', "Ok I'm doing a break", new Date()),
    new Quote('Sean', "If you can't take the heat, don't say the shit", new Date(2020, 4, 26)),
    new Quote('Sean', "It won't even detect ghosts", new Date(2020, 4, 26)),
    new Quote('Sean', "Demon updated for both accounts and management", new Date(2020, 4, 28)),
    new Quote('Sean', "I was wrong", new Date(2020, 4, 28)),
    new Quote('Chris', "Is it because we are in the future?", new Date(2020, 4, 29)),
    new Quote('Neil', "What country is he from? Is he from Africa?", new Date(2020, 4, 29)),
    new Quote('Chris', "You can't go in the past because you are in the future", new Date(2020, 5, 3))
  ];

  newQuoteAdded = new Subject<Quote>();
  dataSource = new MatTableDataSource(this.quotes);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  addQuote(newQuote: Quote) {
    this.quotes.unshift(newQuote);
    // this.quotes.push(newQuote);
    this.dataSource._updateChangeSubscription();
  };

  getAuthorNames() {
    let authorNames:string[] = [];
    authorNames = this.quotes.map(quote => { return quote.author });
    return authorNames.filter((a, b) => authorNames.indexOf(a) === b);
  }
}
