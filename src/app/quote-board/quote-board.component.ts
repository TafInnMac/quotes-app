import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';


import { Quote } from './quote-block/quote.model'
import { QuotesService } from '../quotes.service';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddQuoteComponent } from '../add-quote/add-quote.component';
import { MatSort, MatSortable } from '@angular/material/sort';


@Component({
  selector: 'app-quote-board',
  templateUrl: './quote-board.component.html',
  styleUrls: ['./quote-board.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class QuoteBoardComponent implements OnInit {
  @Input() quote: Quote;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  expandedElement: Quote | null;


  // displayedColumns: string[] = ['name', 'quote'];


  // quotes: Quote[] = [];
  // quotes: MatTableDataSource<Quote[]>;

  constructor(private dialog: MatDialog, private quotesService: QuotesService) {
    this.quotesService.newQuoteAdded.subscribe;
  }

  // dataSource = new MatTableDataSource(this.quotesService.quotes);
  dataSource = this.quotesService.dataSource;

  columnsToDisplay: string[] = ['quote'];

  ngOnInit(): void {
    // this.quotes = this.quotesService.quotes;
    // this.quotes = new MatTableDataSource(this.quotesService.quotes);\
    // this.dataSource.paginator = this.paginator
    this.sort.sort(({ id: 'date', start: 'desc' }) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.quotesService.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // onQuoteAdded(quote: Quote) {
  //   this.quotes.push(quote);
  //   console.log(quote);
  // }

  openDialog() {
    this.dialog.open(AddQuoteComponent, {
      width: '60vw',
      height: '30vh'
    });
  }
}
