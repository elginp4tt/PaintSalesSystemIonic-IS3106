import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';

import { UtilityService } from './utility.service';
import { SessionService } from './session.service';
import { TransactionLineItem } from './transaction-line-item';
import { PaintTransaction } from './paint-transaction';
import { DeliveryServiceTransaction } from './delivery-service-transaction';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	baseUrl: string;

	private cart: TransactionLineItem[];
	private itemCount = new BehaviorSubject(0);
	private remainingLoyaltyPoint : number;
	private isMember : boolean;
	private totalPrice : number;
	private discount : number;

	constructor(private httpClient: HttpClient,
		private utilityService: UtilityService,
		private sessionService: SessionService) 
	{

		this.baseUrl = this.utilityService.getRootPath() + 'Cart';
		
		this.cart = [];
		this.remainingLoyaltyPoint = 0;
		this.isMember = false;
		this.totalPrice = 0;
		this.discount =0;
	}

	instantiateCart() {
		this.cart = [];
	}

	//called when logout
	clearCustomerInfo()
	{
		this.isMember = false;
		this.remainingLoyaltyPoint = 0;
		this.totalPrice = 0;
		this.discount = 0;
	}

	getDiscount()
	{
		return this.discount;
	}

	setDiscount(discount : number)
	{
		this.discount = discount;
	}


	getTotalPrice()
	{
		return this.totalPrice;
	}

	setTotalPrice(totalPrice : number)
	{
		this.totalPrice = totalPrice;
	}

	getIsMember()
	{
		return this.isMember;
	}

	setIsMember(isMember : boolean)
	{
		this.isMember = isMember;
	}

	getLoyaltyPoint()
	{
		return this.remainingLoyaltyPoint;
	}

	setLoyaltyPoint(loyaltyPoint : number)
	{
		this.remainingLoyaltyPoint = loyaltyPoint;
	}


	getCart() {
		return this.cart;
	}

	setCart(cart : TransactionLineItem[])
	{
		this.cart = cart;
	}



	getItemCount() {
		return this.itemCount;
	}

	addItem(transactionLineItem?: TransactionLineItem) 
	{

		if (transactionLineItem instanceof PaintTransaction) {
			console.log("yes, this is a paint transaction");
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
		}
		else
		{
			this.cart.push(transactionLineItem);
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

	removeItem(i?: number) {
		
		let newArr : TransactionLineItem[] = [];
		for(var y = 0;y < this.cart.length;y++)
		{
			if(y != i)
			{	
				newArr.push(this.cart[y]);
			}
		}
		this.cart = newArr;
		
	}

	clearCart() {
		this.instantiateCart();
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
