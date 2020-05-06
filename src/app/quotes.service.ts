import { Injectable } from '@angular/core';
import { Quote } from './quote-board/quote-block/quote.model';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {
  quotes: Quote[] = [
    new Quote('Dave', 'Yes, green lights are good'),
    new Quote('Chris', 'With my headache today, I can believe in everything!'),
    new Quote('Chris', "Did you do any shopping's lately?"),
    new Quote('Sean Adams', "Scary massive balls flying about"),
    new Quote('Chris', "It's not gonna sting me if i'm not gonna squeeze it"),
    new Quote('Chris', "His naked photos are only worth for third place"),
    new Quote('Osama', "The guy got corona. Corona got scared of him"),
    new Quote('Sean', "If it's really windy, look at your toilet"),
    new Quote('Liam', "If a mile is 5 miles"),
    new Quote('Chris', "I was gonna ask you. Should I touch it?"),
    new Quote('Sean', "It's either I carry on and look like Jesus...")
  ];

  newQuoteAdded = new Subject<Quote>();
  dataSource = new MatTableDataSource(this.quotes);

  constructor() { }

  addQuote(newQuote: Quote) {
    this.quotes.push(newQuote);
    this.dataSource._updateChangeSubscription();
  };

  getAuthorNames() {
    let authorNames:string[] = [];
    // return 
    authorNames = this.quotes.map(quote => { return quote.author });
    // console.log(test)
    return authorNames.filter((a, b) => authorNames.indexOf(a) === b);
    // let authorsRaw = this.quotes.map(quote => { return quote.author });
    // console.log(authors)
    // return authors;

    // let filteredAuthors = authorsRaw.reduce((unique, author) => {
    //   return unique.includes(author) ? unique : [...unique, author];
    // })

    // return filteredAuthors;
  }
}
