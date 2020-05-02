import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { SessionService } from './session.service';
import { TransactionService } from './transaction.service';
import { TransactionLineItem } from './transaction-line-item';
import { PaintTag } from './paint-tag';
import { PaintTransaction } from './paint-transaction';
import { DeliveryServiceTransaction } from './delivery-service-transaction';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	
	baseUrl: string;
	
	private cart: TransactionLineItem[];
	private itemCount = new BehaviorSubject(0);

	constructor(private httpClient: HttpClient,
				private utilityService: UtilityService,
				private transactionService: TransactionService,
				private sessionService: SessionService) {
				  
		this.baseUrl = this.utilityService.getRootPath() + 'Cart';
		this.cart = [];
	}
  
	getCart() {
		return this.cart;
	}
  
	getItemCount() {
		return this.itemCount;
	}
  
	addItem(transactionLineItem?: TransactionLineItem){
		let added = false;
		for (let i of this.cart) {
			if (i.itemName === transactionLineItem.itemName) {
				i.quantity += 1;
				added = true;
				break;
			}
		}
		  
		if (!added) {
			this.cart.push(transactionLineItem);
		}
		this.itemCount.next(this.itemCount.value + 1);
		this.getItemCount();

		console.log("**********I am at cart");
		for (var i =0; i < this.cart.length; i++){
			console.log("*** Cart item: " + this.cart[i].itemName);
			console.log("*** Cart item: " + this.cart[i].quantity);
			console.log("*** Cart item: " + this.cart[i].price);		
			console.log("*** Cart item: " , this.cart[i] instanceof PaintTransaction);		
		}
	}
	  
	decreaseItem(transactionLineItem?: TransactionLineItem) {
		for (const [index, i] of this.cart.entries()) {
			if (i.itemName === transactionLineItem.itemName) {
				i.quantity -= 1;
			if (i.quantity === 0) {
				this.cart.splice(index, 1);
				}
			}
		}
		this.itemCount.next(this.itemCount.value - 1);
	}

	removeItem(transactionLineItem?: TransactionLineItem) {
		for (const [index, i] of this.cart.entries()) {
			if (i.itemName === transactionLineItem.itemName) {
				this.itemCount.next(this.itemCount.value - i.quantity);
				this.cart.splice(index, 1);
			}
		}
	}

	clearCart() {
		this.cart.length = 0;
	}
	
	checkout() {
		this.transactionService.createNewTransaction(this.sessionService.getCurrentCustomer(), this.getCart());
		
		this.clearCart();
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
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
	}
}
