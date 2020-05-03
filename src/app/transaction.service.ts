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
		private sessionService: SessionService) {

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

	createNewTransaction(customer: Customer, transactionLineItems: TransactionLineItem[]): Observable<any> {
		console.log("**********transaction service ts: Create new Transaction");
		console.log("**********transaction service ts TLE length before: ", transactionLineItems.length);
		let arr : TransactionLineItem [] = [];
		let ds: DeliveryServiceTransaction  = new DeliveryServiceTransaction();
		let d: Delivery = new Delivery();
	
		ds.itemName = "Delivery Service";
		ds.price = 50;
		ds.quantity = 1;

		d.locationAddress = "address 1";
		d.postalCode = "123456";
		d.deliveryStartTime = new Date ("2020-04-09T21:20:00Z[UTC]");
		d.deliveryEndTime = new Date ("2020-04-09T21:00:00Z[UTC]");

		ds.delivery = d;
		// arr.push(ds);
		console.log("***arr: " , arr)
		// let newTransaction : Transaction = new Transaction (null, customer, transactionLineItems);
		let createNewTransactionReq = {
			// "newTransactionLineItems": transactionLineItems,
			// "customerId": customer.customerId
			"newTransactionLineItems": arr,
			"customerId" : 1
		};

		console.log("**********transaction service ts: custid: ", createNewTransactionReq.customerId);

		return this.httpClient.put<any>(this.baseUrl, createNewTransactionReq, httpOptions).pipe
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
