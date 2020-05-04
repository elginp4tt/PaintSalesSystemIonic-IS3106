import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { SessionService } from './session.service';
import { Delivery } from './delivery';
import { DeliveryServiceTransaction } from './delivery-service-transaction';



const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
	
	baseUrl: string;

	constructor(private httpClient: HttpClient,
			  private utilityService: UtilityService,
			  private sessionService: SessionService) { 
			  
		this.baseUrl = this.utilityService.getRootPath() + 'Delivery';
	}
	
	

	getAllDeliveries(): Observable<any>
	{
		
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllDeliveries?username=" + this.sessionService.getCurrentCustomer().username).pipe
		(
			catchError(this.handleError)
		)
	}

	
	getDeliveryById(deliveryId : number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveDelivery/" + deliveryId).pipe
		(
			catchError(this.handleError)
		);
	}


	updateDelivery(deliveryToUpdate : Delivery) : Observable<any>
	{
		let updateDeliveryReq = {
			"delivery" : deliveryToUpdate
		}

		return this.httpClient.post<any>(this.baseUrl, updateDeliveryReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}


	createDelivery(newDelivery : Delivery) :Observable<any>
	{
		let createDeliveryReq = {
			"delivery" : newDelivery
		}

		return this.httpClient.put<any>(this.baseUrl + "?username=" + this.sessionService.getCurrentCustomer().username, createDeliveryReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);

		// return this.httpClient.put<any>(this.baseUrl + '?username=customer1', createDeliveryReq, httpOptions).pipe
		// (
		// 	catchError(this.handleError)
		// );
	}

	
	private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = '';
		
		if(error.error instanceof ErrorEvent)
		{
			errorMessage = 'An unknown error has occurred: ' + error.error.message;
		}
		else
		{
			errorMessage = 'An HTTP error has occurred: ' + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		return throwError(errorMessage)
	}
}
