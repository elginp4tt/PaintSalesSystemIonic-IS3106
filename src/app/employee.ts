import { AccessRightEnum } from './access-right-enum.enum';
import { PaintService } from './paint-service';
import { Delivery } from './delivery';
import { MessageOfTheDay } from './message-of-the-day';


export class Employee {
	
	employeeId: number;
	username: string;
	password: string;
	salt: string;
	firstName: string;
	lastName: string;
	accessRightEnum: AccessRightEnum;
	
	paintServices: PaintService[];
	deliveries: Delivery[];
	motds: MessageOfTheDay[];
	
	constructor(employeeId?: number, username?: string, password?: string, salt?: string, firstName?: string, lastName?: string, 
	accessRightEnum?: AccessRightEnum, paintServices?: PaintService[], deliveries?: Delivery[], motds?: MessageOfTheDay[]){
		this.employeeId = employeeId;
		this.username = username;
		this.password = password;
		this.salt = salt;
		this.firstName = firstName;
		this.lastName = lastName;
		this.accessRightEnum = accessRightEnum;
		this.paintServices = paintServices;
		this.deliveries = deliveries;
		this.motds = motds;
	}
}
