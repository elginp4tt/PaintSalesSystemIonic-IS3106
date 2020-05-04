import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from './session.service';
import { Customer } from './customer';
import { NgForm } from '@angular/forms';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class CustomerService {

	baseUrl: string;

	constructor(private httpClient: HttpClient,
		private sessionService: SessionService) {
		this.baseUrl = this.sessionService.getRootPath() + 'Customer';
	}

	customerLogin(username: string, password: string): Observable<any> {
		console.log("**** customer service ts login: ", this.baseUrl + "/customerLogin?username=" + username + "&password=" + password);
		return this.httpClient.get<any>(this.baseUrl + "/customerLogin?username=" + username + "&password=" + password).pipe
			(
				catchError(this.handleError)
			);
	}

	updateCustomer(toUpdateCustomer: Customer): Observable<any> {

		console.log("***** customer service ts:")
		let updateCustomerReq = {
			'toUpdateCustomer': toUpdateCustomer
		}
		return this.httpClient.put<any>(this.baseUrl + "/updateCustomer", updateCustomerReq, httpOptions).pipe(
			catchError(this.handleError)
		);
	}

	createNewCustomer(newCustomer: Customer): Observable<any> {
		let createNewCustomerReq = {
			"newCustomer": newCustomer,
		};

		return this.httpClient.put<any>(this.baseUrl + "/customer", createNewCustomerReq, httpOptions).pipe
			(
				catchError(this.handleError)
			);
	}



	private handleError(error: HttpErrorResponse) {
		let errorMessage: string = "";

		if (error.error instanceof ErrorEvent) {
			errorMessage = "An unknown error has occurred: " + error.error.message;
		}
		else {
			errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.message}`;
		}

		return throwError(errorMessage);
	}
}
