import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-view-transaction-details',
  templateUrl: './view-transaction-details.page.html',
  styleUrls: ['./view-transaction-details.page.scss'],
})
export class ViewTransactionDetailsPage implements OnInit {

  transactionId : number;
  transactionToView : Transaction;
  retrieveTransactionError : boolean;
  error : boolean;
  errorMessage : string;
  resultSuccess : boolean;

  constructor(private router : Router,
    private activatedRoute : ActivatedRoute,
    private transactionService : TransactionService) { 
      this.retrieveTransactionError = false;
      this.error = false;
      this.resultSuccess = false;
    }

  ngOnInit() {
    this.transactionId = parseInt(this.activatedRoute.snapshot.paramMap.get('transactionId'));
    this.refreshTransaction();
  }

  ionViewWillEnter (){
    this.refreshTransaction();
  }

  refreshTransaction(){
    this.transactionService.getTransactionByTransactionId(this.transactionId).subscribe(
      response => {
        this.transactionToView = response.transaction;
      }, 
      error => {
        this.retrieveTransactionError = true;
        console.log('********** ViewTransactionDetailsPage.ts: ' + error);
        this.errorMessage = "An error has occured while retrieving the Transaction " + error;
      }
    )
  }

  back(){
    this.router.navigate(['/viewAllTransaction']);
  }

}
