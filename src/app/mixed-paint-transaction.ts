import { PaintTransaction } from './paint-transaction';

export class MixedPaintTransaction extends PaintTransaction{
	paintIds: number[];
	paintValues: number[];
	
	constructor(transactionLineItemId?: number, itemName?: string, quantity?: number, price?: number, volume?: number, paintIds?: number[], paintValues?: number[]){
		super(transactionLineItemId, itemName, quantity, price, volume);
		this.paintIds = paintIds;
		this.paintValues = paintValues;
	}
}
	