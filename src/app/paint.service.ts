import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { Paint } from './paint';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PaintService {
	
	baseUrl: string;

  constructor(private httpClient: HttpClient,
			  private utilityService: UtilityService){
				  
		this.baseUrl = this.utilityService.getRootPath() + 'Paint';
	}
  
	getPaints(): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllPaints").pipe
		(
			catchError(this.handleError)
		);
	}
	
	getPaintByPaintId(paintId: number): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrievePaint/" + paintId).pipe
		(
			catchError(this.handleError)
		);
	}
	
	
	createNewPaint(newPaint: Paint): Observable<any>
	{
		let createNewPaintReq = {'newPaint': newPaint};
		
		return this.httpClient.put<any>(this.baseUrl, createNewPaintReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
    }
    
    getFilteredPaintsByCategories(): Observable<any> 
    {
        return this.httpClient.get<any>(this.baseUrl + "/filterPaintsByCategories").pipe
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
