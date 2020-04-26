import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Customer } from '../customer';

import { SessionService } from '../session.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	
	submitted: boolean;
	newCustomer: Customer;
	
	firstName: string;
	lastName: string;
	email: string;
	homeAddress: string;
	username: string;
	password: string;
	
	registrationError: boolean;
	registrationSuccess: boolean;
	message: string;
	errorMessage: string;

	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				private customerService: CustomerService)
	{
		this.submitted = false;
		this.newCustomer = new Customer();
		
		this.registrationSuccess = false;
		this.registrationError = false;
	}

	ngOnInit() {
	}
  
  	register(registrationForm: NgForm)
	{		
		this.submitted = true;
		
		if (registrationForm.valid) 
		{
			this.customerService.createNewCustomer(this.newCustomer).subscribe(
				response => {
					let newCustomerId: number = response.customerId;
					this.registrationSuccess = true;
					this.registrationError = false;
					this.message = "New account created successfully";
					
					this.newCustomer = new Customer();
					this.submitted = false;
					registrationForm.reset();
				},
				error => {
					this.registrationError = true;
					this.registrationSuccess = false;
					this.message = "An error has occurred while creating the new product: " + error;
					
					console.log('********** CreateNewProductPage.ts: ' + error);
				}
			);
		}
	}

}
