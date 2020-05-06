import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuotesService } from './quotes.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private quotesService: QuotesService) {
  }
  dataSource = this.quotesService.dataSource;

  columnsToDisplay: string[] = ['quote'];

  ngOnInit(): void {
    // this.quotes = this.quotesService.quotes;
    // this.quotes = new MatTableDataSource(this.quotesService.quotes);\
    this.dataSource.paginator = this.paginator

  }
}
