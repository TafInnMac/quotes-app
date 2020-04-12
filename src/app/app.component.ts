import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuotesService } from './quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes-app';

  constructor(private quotesService: QuotesService, private dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddQuoteComponent, {
      width: '40vw',
      height: '33vh'
    });
  }
}
