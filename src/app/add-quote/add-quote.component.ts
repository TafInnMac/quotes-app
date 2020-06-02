import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Quote } from '../quote-board/quote-block/quote.model';
import { QuotesService } from '../quotes.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css'],
  // providers: [QuotesService]
})
export class AddQuoteComponent implements OnInit {
  quoteForm: FormGroup;

  constructor(private dialogef: MatDialogRef<AddQuoteComponent>, private quotesService: QuotesService, private snackBar: MatSnackBar) { }

  myControl = new FormControl();
  authors: string[] = this.quotesService.getAuthorNames();
  filteredAuthors: Observable<string[]>;
  newQuote: Quote = {
    quote: '',
    author: '',
    date: new Date()
  }

  ngOnInit(): void {
    this.quoteForm = new FormGroup({
      'quote': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required),
      'date': new FormControl(new Date())
    });

    this.filteredAuthors = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  openSnackBar(author: string) {
    this.snackBar.open(`New quote from ${author.toUpperCase()} added!`, null, {
      duration: 3000,
      panelClass: ['quote-added']
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.authors.filter(author => author.toLowerCase().indexOf(filterValue) === 0);
  }

  onAddQuote() {
    this.newQuote.quote = this.quoteForm.value.quote;
    this.newQuote.author = this.quoteForm.value.author;
    this.newQuote.date = this.quoteForm.value.date;
    this.quotesService.addQuote(this.newQuote);
    this.quotesService.newQuoteAdded.next(this.newQuote);
    this.quotesService.getAuthorNames();
    this.dialogef.close();
  }



}
