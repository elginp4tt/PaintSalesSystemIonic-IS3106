import { Delivery } from './delivery';
import { TransactionLineItem } from './transaction-line-item';

export class DeliveryServiceTransaction extends TransactionLineItem{
	
	delivery: Delivery;
	
	constructor(transactionLineItemId: number, itemName: string, quantity: number, price: number)
	constructor(transactionLineItemId: number, itemName: string, quantity: number, price: number, delivery: Delivery)
	constructor(transactionLineItemId?: number, itemName?: string, quantity?: number, price?: number, delivery?: Delivery){
		super(transactionLineItemId, itemName, quantity, price);
		this.delivery = delivery;
	}
	
}
