import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { TransactionLineItem } from '../transaction-line-item';
import { PaintTransaction } from '../paint-transaction';
import { DeliveryServiceTransaction } from '../delivery-service-transaction';

@Component({
  selector: 'app-view-transaction-details',
  templateUrl: './view-transaction-details.page.html',
  styleUrls: ['./view-transaction-details.page.scss'],
})
export class ViewTransactionDetailsPage implements OnInit {

  transactionId : number;
  transactionToView : Transaction;
  transactionLineItems : TransactionLineItem [];
  retrieveTransactionError : boolean;
  error : boolean;
  errorMessage : string;
  resultSuccess : boolean;
  grossPrice : number;
  netPrice : number;
  discount : number;

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
        this.transactionLineItems = this.transactionToView.transactionLineItems;
        this.retrieveTransactionError = false;
        this.resultSuccess = true;
        this.calculateGrossPrice();
        this.calculateNetPrice();
        this.discount = this.transactionToView.discount;
      }, 
      error => {
        this.retrieveTransactionError = true;
        this.resultSuccess= false;
        console.log('********** ViewTransactionDetailsPage.ts: ' + error);
        this.errorMessage = "An error has occured while retrieving the Transaction " + error;
      }
    )
  }

  back(){
    this.router.navigate(['/viewAllTransaction']);
  }

  calculateGrossPrice (){
    this.grossPrice = 0;
    for (var i =0; i<this.transactionLineItems.length; i++){
      this.grossPrice += this.transactionLineItems[i].price;
    }
  }

  calculateNetPrice(){
    this.netPrice = +this.grossPrice - +this.transactionToView.discount;
  }

  gotDiscount(){
    return this.discount > 0;
  }


  isPaintTransaction(lineItem){
    console.log("*****isPaintTransaction: " , lineItem instanceof PaintTransaction);
    return lineItem instanceof PaintTransaction;
  }
  
  isDeliveryServiceTransaction(lineItem){
    console.log("*****isDeliveryTransaction", lineItem instanceof DeliveryServiceTransaction);
    return lineItem instanceof DeliveryServiceTransaction;
  }
  isPaintServiceTransaction(lineItem){
    console.log("*****isPaintServiceTransaction", lineItem instanceof PaintTransaction);
    return lineItem instanceof PaintTransaction;
  }

}
