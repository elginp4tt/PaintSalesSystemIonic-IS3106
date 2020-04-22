export class TransactionLineItem {
	transactionLineItemId: number;
	itemName: string;
	quantity: number;
	price: number;
	
	constructor(transactionLineItemId?: number, itemName?: string, quantity?: number, price?: number){
		this.transactionLineItemId = transactionLineItemId;
		this.itemName = itemName;
		this.quantity = quantity;
		this.price = price;
	}
}
