import { Customer } from './customer';

export class Member extends Customer{
	loyaltyPoints: number;
	
	constructor(customerId?: number, firstName?: string, lastName?: string, email?: string, homeAddress?: string, username?: string, password?: string, loyaltyPoints?: number){
		super(customerId, firstName, lastName, email, homeAddress, username, password);
		this.loyaltyPoints = loyaltyPoints;
	}
}
