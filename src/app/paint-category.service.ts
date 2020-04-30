import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class PaintCategoryService {

  	
	baseUrl: string;

  constructor(private httpClient: HttpClient,
			  private utilityService: UtilityService){
				  
		this.baseUrl = this.utilityService.getRootPath() + 'PaintCategory';
	}
  
  getPaintCategories(): Observable<any>
	{
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllPaintCategories").pipe
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
