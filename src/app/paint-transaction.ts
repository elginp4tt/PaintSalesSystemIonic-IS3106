import { TransactionLineItem } from './transaction-line-item';
import { Paint } from './paint';

export class PaintTransaction extends TransactionLineItem{
	volume: number;
	paint: Paint;
	
	constructor(transactionLineItemId: number, itemName: string, quantity: number, price: number, volume: number)
	constructor(transactionLineItemId: number, itemName: string, quantity: number, price: number, volume: number, paint: Paint)
	constructor(transactionLineItemId?: number, itemName?: string, quantity?: number, price?: number, volume?: number, paint?: Paint){
		super(transactionLineItemId, itemName, quantity, price);
		this.volume = volume;
		this.paint = paint;
	}
}
