import { Employee } from './employee';
import { PaintServiceTransaction } from './paint-service-transaction';

export class PaintService {
	paintServiceId: number;
	locationAddress: string;
	postalCode: string;
	paintServiceStartTime: Date;
	paintServiceEndTime: Date;
	employee: Employee;
	paintServiceTransaction: PaintServiceTransaction;
	
	constructor(paintServiceId?: number, locationAddress?: string, postalCode?: string, paintServiceStartTime?: Date, 
	paintServiceEndTime?: Date, employee?: Employee, paintServiceTransaction?: PaintServiceTransaction){
		this.paintServiceId = paintServiceId;
		this.locationAddress = locationAddress;
		this.postalCode = postalCode;
		this.paintServiceStartTime = paintServiceStartTime;
		this.paintServiceEndTime = paintServiceEndTime;
		this.employee = employee;
		this.paintServiceTransaction = paintServiceTransaction;
	}
}
