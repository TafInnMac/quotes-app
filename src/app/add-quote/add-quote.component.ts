import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote-board/quote-block/quote.model';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css'],
  // providers: [QuotesService]
})
export class AddQuoteComponent implements OnInit {
  @ViewChild('firstName') firstNameRef: ElementRef;
  @ViewChild('lastName') lastNameRef: ElementRef;
  @ViewChild('quoteText') quoteTextRef: ElementRef;

  // @Output() quoteAdded = new EventEmitter<Quote>();

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
  }

  onAddQuote() {
    const firstName = this.firstNameRef.nativeElement.value;
    const lastName = this.lastNameRef.nativeElement.value;
    const author = `${firstName} ${lastName}`
    const quoteQuote = this.quoteTextRef.nativeElement.value;
    const newQuote = new Quote(author, quoteQuote);
    this.quotesService.addQuote(newQuote);
    this.quotesService.newQuoteAdded.next(newQuote);
    // console.log("quote to be added:" + JSON.stringify(newQuote));
  }

}
