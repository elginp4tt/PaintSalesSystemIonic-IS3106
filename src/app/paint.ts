import { PaintTransaction } from './paint-transaction';
import { PaintCategory } from './paint-category';
import { PaintTag } from './paint-tag';

export class Paint {
	
	paintId: number;
	name: string;
	colourCode: string;
    price: number; //Might need to cast to any
    quantityOnHand: number;
    paintRating: number;
	
	paintTransactions: PaintTransaction[];
	paintCategories: PaintCategory[];
	tags: PaintTag[];
	
	constructor(paintId?: number, name?: string, colourCode?: string, price?: number, quantityOnHand?: number, paintRating?: number, paintTransactions?: PaintTransaction[], paintCategories?: PaintCategory[], tags?: PaintTag[]) {
		this.paintId = paintId;
		this.name = name;
		this.colourCode = colourCode;
        this.price = price;
        this.quantityOnHand = quantityOnHand;
        this.paintRating = paintRating;
	    this.paintTransactions = paintTransactions;
		this.paintCategories = paintCategories;
		this.tags = tags;
	}
	
}
