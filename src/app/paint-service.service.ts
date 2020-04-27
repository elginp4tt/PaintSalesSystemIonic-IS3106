import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Paint } from './paint';
import { PaintService } from './paint-service';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PaintServiceService {

	baseUrl: string;

	constructor(private httpClient: HttpClient,
			  private utilityService: UtilityService){
				  
		this.baseUrl = this.utilityService.getRootPath() + 'PaintService';
	}
	
	getPaintServiceByPaintServiceId(paintServiceId: number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrievePaintService/" + paintServiceId).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	createNewPaintService(newPaintService: PaintService): Observable<any>
	{
		let createNewPaintServiceReq = {'newPaintService': newPaintService};
		
		return this.httpClient.put<any>(this.baseUrl, createNewPaintServiceReq, httpOptions).pipe
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
