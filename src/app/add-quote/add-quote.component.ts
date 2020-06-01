import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
  @ViewChild('authorField') authorRef: ElementRef;
  // @ViewChild('lastName') lastNameRef: ElementRef;
  @ViewChild('quoteText') quoteTextRef: ElementRef;

  // @Output() quoteAdded = new EventEmitter<Quote>();

  constructor(private dialogef: MatDialogRef<AddQuoteComponent>, private quotesService: QuotesService, private snackBar: MatSnackBar) { }
  myControl = new FormControl();
  authors: string[] = this.quotesService.getAuthorNames();
  filteredAuthors: Observable<string[]>;

  ngOnInit(): void {
    this.quoteForm = new FormGroup({
      'quote': new FormControl(null, Validators.required),
      'author': new FormControl(null, Validators.required)
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
    // const firstName = this.firstNameRef.nativeElement.value;
    // const lastName = this.lastNameRef.nativeElement.value;
    const author = this.authorRef.nativeElement.value;
    const quoteQuote = this.quoteTextRef.nativeElement.value;
    const newQuote = new Quote(author, quoteQuote);
    this.quotesService.addQuote(newQuote);
    this.quotesService.newQuoteAdded.next(newQuote);
    this.quotesService.getAuthorNames();
    this.dialogef.close();
    // console.log("quote to be added:" + JSON.stringify(newQuote));
  }



}
