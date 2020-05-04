import { Customer } from './customer';
import { TransactionLineItem } from './transaction-line-item';

export class Transaction {
	transactionId: number;
	customer: Customer;
	transactionLineItems: TransactionLineItem[];
	discount : number;

	constructor(transactionId?: number, customer?: Customer, transactionLineItems?: TransactionLineItem[], discount?: number){
		this.transactionId = transactionId;
		this.customer = customer;
		this.transactionLineItems = transactionLineItems;
		this.discount = discount;
	}
}
