import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Customer } from './customer';
import { Transaction } from './transaction';
import { TransactionLineItem } from './transaction-line-item';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

	constructor(private platform: Platform)
	{		
	}
	
	getRootPath(): string
	{
		// console.log('this.platform.is("hybrid"): ' + this.platform.is('hybrid'));
		
		if(this.platform.is('hybrid'))
		{
			return "http://192.168.137.1:8080/PaintSalesSystemRws/Resources/"; //put link here
			//return "http://192.168.0.103:8080/PaintSalesSystemRws/Resources/";//bingsen's IP address
		}
		else
		{
			return "/api/";
		}
	}
	
	getIsLogin(): boolean
	{
		if(sessionStorage.isLogin == "true")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	
	setIsLogin(isLogin: boolean): void
	{
		sessionStorage.isLogin = isLogin;
	}
	
	
	getCurrentCustomer(): Customer
	{
		return JSON.parse(sessionStorage.currentCustomer);
	}
	
	
	setCurrentCustomer(currentCustomer: Customer): void
	{		 
		sessionStorage.currentCustomer = JSON.stringify(currentCustomer);
	}
	
	
	getUsername(): string
	{
		return sessionStorage.username;
	}


	setUsername(username: string): void
	{
		sessionStorage.username = username;
	}
	
	
	getPassword(): string
	{
		return sessionStorage.password;
	}


	setPassword(password: string): void
	{
		sessionStorage.password = password;
	}
	
	
	getTransactions(): Transaction[]
	{
		return sessionStorage.transactions;
	}
	
	
	setTransactions(transactions: Transaction[]): void
	{
		sessionStorage.transactions = transactions;
	}

}
