import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Paint } from './paint';
import { PaintService } from './paint-service';
import { SessionService } from './session.service';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PaintServiceService {

	baseUrl: string;

	constructor(private httpClient: HttpClient,
			  private utilityService: UtilityService,
			  private sessionService : SessionService){
				  
		this.baseUrl = this.utilityService.getRootPath() + 'PaintService';
	}
	
	
	getAllPaintServices() : Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllPaintServices?username=" + this.sessionService.getCurrentCustomer().username).pipe
		(
			catchError(this.handleError)	
		);
	}

	
	getPaintServiceById(paintServiceId : number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrievePaintService/" + paintServiceId).pipe
		(
			catchError(this.handleError)
		);
	}

	updatePaintService(paintServiceToUpdate : PaintService) : Observable<any>
	{
		let updatePaintServiceReq = {
			"paintService" : paintServiceToUpdate
		}

		return this.httpClient.post<any>(this.baseUrl, updatePaintServiceReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	createPaintService(newPaintService : PaintService) : Observable<any>
	{
		let createPaintServiceReq = {
			"paintService" : newPaintService
		}

		return this.httpClient.put<any>(this.baseUrl + "?username=" + this.sessionService.getCurrentCustomer().username, createPaintServiceReq, httpOptions).pipe
		(
			catchError(this.handleError)
		)
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
