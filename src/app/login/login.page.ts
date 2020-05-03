import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SessionService } from '../session.service';
import { CustomerService } from '../customer.service';

import { Customer } from '../customer';
import { AppComponent } from '../app.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	
	submitted: boolean;
	
	username: string;
	password: string;
	
	loginError: boolean;
	errorMessage: string;


	constructor(private router: Router,
				private sessionService: SessionService,
				private customerService: CustomerService,
				private cartService : CartService,
				private appComponent : AppComponent
				) { 
	
		this.submitted = false;
	
	}


	ngOnInit() {
	}
	  
	  
  	clear()
	{
		this.username = "";
		this.password = "";
	}
	
	
	customerLogin(customerLoginForm: NgForm)
	{
		this.submitted = true;
		
		if (customerLoginForm.valid) 
		{
			this.sessionService.setUsername(this.username);
			this.sessionService.setPassword(this.password);
						
			this.customerService.customerLogin(this.username, this.password).subscribe(
				response => {										
					let customer: Customer = response.customerEntity;				
					if(customer != null)
					{
						this.sessionService.setIsLogin(true);
						this.sessionService.setCurrentCustomer(customer);					
						this.loginError = false;
						this.appComponent.updateMainMenu();
<<<<<<< HEAD
						this.cartService.instantiateCart();
=======
						this.router.navigate(['/home']);
>>>>>>> d970a1a0831b33353a564fcfa166b3b01130224e
					}
					else
					{
						this.loginError = true;
					}
				},
				error => {
					this.loginError = true;
					this.errorMessage = error
				}
			);
		}
		else
		{
		}
	}
	
	customerLogout(): void
	{
		this.sessionService.setIsLogin(false);
		this.sessionService.setCurrentCustomer(null);		
		this.appComponent.updateMainMenu();

	}
	
	back()
	{
		this.router.navigate(["/home"]);
	}

	registerCustomer (){
		this.router.navigate(["/registerCustomer"]);
	}

}
