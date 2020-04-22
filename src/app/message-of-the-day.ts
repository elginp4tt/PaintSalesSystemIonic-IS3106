export class MessageOfTheDay {
	motdId: number;
	title: string;
	message: string;
	messageDate: Date;
	
	constructor(motdId?: number, title?: string, message?: string, messageDate?: Date){
		this.motdId = motdId;
		this.title = title;
		this.message = message;
		this.messageDate = messageDate;
	}
}
