import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { SessionService } from './session.service';
import { Transaction } from './transaction';
import { Customer } from './customer';
import { TransactionLineItem } from './transaction-line-item';
import { DeliveryService } from './delivery.service';
import { DeliveryServiceTransaction } from './delivery-service-transaction';
import { Delivery } from './delivery';
import { CartService } from './cart.service';
import { PaintTransaction } from './paint-transaction';
import { Paint } from './paint';
import { PaintServiceTransaction } from './paint-service-transaction';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class TransactionService {

	baseUrl: string;

	constructor(private httpClient: HttpClient,
		private utilityService: UtilityService,
		private sessionService: SessionService,
		private cartService: CartService) {

		this.baseUrl = this.utilityService.getRootPath() + 'transaction';
	}

	getTransactions(): Observable<any> {
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllTransactions?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
			(
				catchError(this.handleError)
			);
	}

	getTransactionByTransactionId(transactionId: number): Observable<any> {
		console.log("**********getTransactionByTransactionId method trans id: " + transactionId)
		return this.httpClient.get<any>(this.baseUrl + "/retrieveTransaction/" + transactionId).pipe
			(
				catchError(this.handleError)
			);
	}

	createNewTransaction(): Observable<any> {

		let arr : TransactionLineItem[] = this.cartService.getCart();
		let paintLineItemArr : PaintTransaction[] = [];
		let deliveryLineItemArr : DeliveryServiceTransaction[] = [];
		let paintServiceLineItemArr : PaintServiceTransaction[] = [];
		for(var x = 0;x < arr.length;x++)
		{
			if(arr[x] instanceof DeliveryServiceTransaction)
			{
				deliveryLineItemArr.push(<DeliveryServiceTransaction>arr[x]);
			}
			else if(arr[x] instanceof PaintTransaction)
			{
				paintLineItemArr.push(<PaintTransaction>arr[x]);
			}
			else if(arr[x] instanceof PaintServiceTransaction)
			{
				paintServiceLineItemArr.push(<PaintServiceTransaction>arr[x]);
			}
		}
		
		let createNewTransactionReq = {
			"paintTransactions": paintLineItemArr,
			"deliveryServiceTransactions" : deliveryLineItemArr,
			"paintServiceTransactions" : paintServiceLineItemArr,
			"discount" : this.cartService.getDiscount()
		}

		console.log(this.sessionService.getCurrentCustomer().username);

		return this.httpClient.put<any>(this.baseUrl + "/?username=" + this.sessionService.getCurrentCustomer().username, createNewTransactionReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse) {
		let errorMessage: string = "";

		if (error.error instanceof ErrorEvent) {
			errorMessage = "An unknown error has occurred: " + error.error.message;
		}
		else {
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}

		console.error(errorMessage);

		return throwError(errorMessage);
	}
}
