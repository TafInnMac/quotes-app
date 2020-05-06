import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuoteComponent } from '../add-quote/add-quote.component';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private dialog: MatDialog, private quotesService: QuotesService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AddQuoteComponent, {
      width: '60vw',
      height: '40vh'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.quotesService.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
