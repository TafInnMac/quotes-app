import { Component, OnInit, Input } from '@angular/core';
import { Quote } from './quote.model';
import { QuotesService } from 'src/app/quotes.service';

@Component({
  selector: 'app-quote-block',
  templateUrl: './quote-block.component.html',
  styleUrls: ['./quote-block.component.css']
})

export class QuoteBlockComponent implements OnInit {
  @Input() quote: Quote;

  constructor(private quotesService:QuotesService) { }

  ngOnInit(): void {
  }

}
