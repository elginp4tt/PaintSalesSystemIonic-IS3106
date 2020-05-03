import { Customer } from './customer';
import { TransactionLineItem } from './transaction-line-item';

export class Transaction {
	transactionId: number;
	customer: Customer;
	transactionLineItems: TransactionLineItem[];

	constructor(transactionId?: number, customer?: Customer, transactionLineItems?: TransactionLineItem[]){
		this.transactionId = transactionId;
		this.customer = customer;
		this.transactionLineItems = transactionLineItems;
	}
}
