import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UtilityService } from './utility.service';
import { SessionService } from './session.service';
import { Transaction } from './transaction';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
	
	baseUrl: string;

  constructor(private httpClient: HttpClient,
			  private utilityService: UtilityService,
			  private sessionService: SessionService){
				  
		this.baseUrl = this.utilityService.getRootPath() + 'Transaction';
	}
	
	getTransactions(): Observable<any>
	{				
		return this.httpClient.get<any>(this.baseUrl + "/retrieveAllTransaction?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
		(
			catchError(this.handleError)
		);
	}
	
	createNewTransaction(newTransaction: Transaction): Observable<any>
	{
		let createNewTransactionReq = {'newTransaction': newTransaction};
		
		return this.httpClient.put<any>(this.baseUrl, createNewTransactionReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}
	
	private handleError(error: HttpErrorResponse)
	{
		let errorMessage: string = "";
		
		if (error.error instanceof ErrorEvent) 
		{		
			errorMessage = "An unknown error has occurred: " + error.error.message;
		} 
		else 
		{		
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
		}
		
		console.error(errorMessage);
		
		return throwError(errorMessage);		
	}
}
