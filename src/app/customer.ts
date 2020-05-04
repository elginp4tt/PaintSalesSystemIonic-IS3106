import { Transaction } from './transaction';

export class Customer {
	
	customerId: number;
	firstName: string;
	lastName: string;
	email: string;
	homeAddress: string;
	username: string;
	password: string;
	transactions: Transaction[];
	loyaltyPoints : number;
	
	constructor(customerId?: number, firstName?: string, lastName?: string, email?: string, homeAddress?: string, username?: string, password?: string, transactions?: Transaction[], loyaltyPoints?: number){
		this.customerId = customerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.homeAddress = homeAddress;
		this.username = username;
		this.password = password;
		this.transactions = transactions;
		this.loyaltyPoints = loyaltyPoints;
	}
}
