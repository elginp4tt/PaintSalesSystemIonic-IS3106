import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ModalController } from '@ionic/angular';
import { SessionService } from '../session.service';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile-modal',
  templateUrl: './customer-profile-modal.page.html',
  styleUrls: ['./customer-profile-modal.page.scss'],
})
export class CustomerProfileModalPage implements OnInit {

  currentCustomer : Customer;
  emptyCust : Customer;

  username : string;
  firstName : string;
  lastName : string;
  password : string;
  email : string;
  homeAddress : string;


  constructor(private modalController : ModalController,
    private sessionService : SessionService,
    private router : Router) { }

  ngOnInit() {
    this.currentCustomer = this.sessionService.getCurrentCustomer();
    this.emptyCust = new Customer;
     }

  public updateModal(){
    
    if(this.currentCustomer.firstName.length > 32 || this.currentCustomer.lastName.length > 32){
      this.nameLengthError();
      return false;
    }

    if (this.currentCustomer.password.length < 6 || this.currentCustomer.password.length>16){
      this.passwordLengthError();
      return false;
    }

    this.modalController.dismiss({
      'toUpdateCustomer' : this.currentCustomer
    });
  }

  public closeModal(){
    this.modalController.dismiss({
      'toUpdatecustomer' : this.emptyCust
    });
  }

  async nameLengthError (){
		const toast = document.createElement('ion-toast');
		toast.message = "Length Of First/Last Name Is Too Long, Keep It Within 32 Characters!";
		toast.position = "top";
		toast.duration = 2000;
		toast.style.textAlign = "center";

		document.body.appendChild(toast);
		return toast.present();
  }
  
  async passwordLengthError (){
		const toast = document.createElement('ion-toast');
		toast.message = "Password Need To Be Kept Between 6 To 16 Characters!";
		toast.position = "top";
		toast.duration = 2000;
		toast.style.textAlign = "center";

		document.body.appendChild(toast);
		return toast.present();
	}

}
