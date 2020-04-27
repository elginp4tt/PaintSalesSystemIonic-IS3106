import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
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
			  private utilityService: UtilityService) { 
			  
		this.baseUrl = this.utilityService.getRootPath() + 'Delivery';
	}
	
	getDeliveryByDeliveryId(deliveryId: number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveDelivery/" + deliveryId).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	createNewDelivery(newDelivery: Delivery): Observable<any>
	{
		let createNewDeliveryReq = {'newDelivery': newDelivery};
		
		return this.httpClient.put<any>(this.baseUrl, createNewDeliveryReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
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
