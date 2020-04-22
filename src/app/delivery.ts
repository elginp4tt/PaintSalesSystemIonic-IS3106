import { Employee } from './employee';
import { DeliveryServiceTransaction } from './delivery-service-transaction';

export class Delivery {
	
	deliveryId: number;
	locationAddress: string;
	postalCode: string;
	deliveryStartTime: Date;
	deliveryEndTime: Date;
	
	employee: Employee;
	deliveryServiceTransaction: DeliveryServiceTransaction;
	
	constructor(deliveryId?: number, locationAddress?: string, postalCode?: string, deliveryStartTime?: Date, deliveryEndTime?: Date, employee?: Employee, deliveryServiceTransaction?: DeliveryServiceTransaction){
		this.deliveryId = deliveryId;
		this.locationAddress = locationAddress;
		this.postalCode = postalCode;
		this.deliveryStartTime = deliveryStartTime;
		this.deliveryEndTime = deliveryEndTime;
		this.employee = employee;
		this.deliveryServiceTransaction = deliveryServiceTransaction;
	}
}