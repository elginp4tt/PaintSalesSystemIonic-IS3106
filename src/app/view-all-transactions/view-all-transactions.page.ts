import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-view-all-transactions',
  templateUrl: './view-all-transactions.page.html',
  styleUrls: ['./view-all-transactions.page.scss'],
})
export class ViewAllTransactionsPage implements OnInit {
  transactions: Transaction[];

  retrieveError: boolean;
  
  constructor(private router: Router,
    private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.refreshTransactions();
  }

  ionViewWillEnter(){
    this.refreshTransactions();
  }

  viewTransactionDetails (event, transaction){
    console.log("**********Routing to individual transaction page");
    console.log("**********Trans ID: " + transaction.transactionId);

    this.router.navigate(["/viewTransactionDetails"]);
  }

  refreshTransactions() {
    this.transactionService.getTransactions().subscribe(
      response => {
        this.transactions = response.transactions;
      },
      error => {
        catchError(this.handleError)
      }
    )
  }

  back (){
    this.router.navigate(['/home']);
  }

  private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
		{		
			errorMessage = "An unknown error has occurred: " + error.error.message;
		} 
		else 
		{		
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.message}`;
		}
		
		return throwError(errorMessage);		
	}

}
