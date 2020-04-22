import { TransactionLineItem } from './transaction-line-item';
import { PaintService } from './paint-service';

export class PaintServiceTransaction extends TransactionLineItem{
	paintService: PaintService;
	
	constructor(transactionLineItemId?: number, itemName?: string, quantity?: number, price?: number, paintService?: PaintService){
		super(transactionLineItemId, itemName, quantity, price);
		this.paintService = paintService;
	}
}
