import { Component, OnInit, Input } from '@angular/core';

import { Quote } from './quote-block/quote.model'
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quote-board',
  templateUrl: './quote-board.component.html',
  styleUrls: ['./quote-board.component.css'],
  // providers: [QuotesService]
})

export class QuoteBoardComponent implements OnInit {
  @Input() quote: Quote;

  quotes: Quote[] = [];

  constructor(private quotesService: QuotesService) {
    this.quotesService.newQuoteAdded.subscribe;
  }

  ngOnInit(): void {
    this.quotes = this.quotesService.quotes;
  }

  // onQuoteAdded(quote: Quote) {
  //   this.quotes.push(quote);
  //   console.log(quote);
  // }

}
