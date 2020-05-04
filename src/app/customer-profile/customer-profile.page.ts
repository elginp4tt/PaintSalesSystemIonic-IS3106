import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { SessionService } from '../session.service';
import { AlertController, ModalController } from '@ionic/angular';
import { CustomerProfileModalPage } from '../customer-profile-modal/customer-profile-modal.page';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.page.html',
  styleUrls: ['./customer-profile.page.scss'],
})
export class CustomerProfilePage implements OnInit {
  currentCustomer: Customer;

  customerToUpdate: Customer;



  constructor(private sessionService: SessionService,
    private modalController: ModalController,
    private customerService: CustomerService) { }

  ngOnInit() {
    this.currentCustomer = this.sessionService.getCurrentCustomer();
  }

  becomeAMember(){
    console.log("*** become a member");
    if (this.checkMember()){
      this.alreadyAMemberToast();
    } else {
      console.log("**** not a member yet");
      this.makeMember();
    }
  }


  checkMember(){
    if (this.currentCustomer.loyaltyPoints == null){
      return false;
    } else {
      return true;
    }
  }

  makeMember(){
    this.customerService.makeMember(this.currentCustomer).subscribe(response =>{
      this.sessionService.setCurrentCustomer(response.customer);
      this.currentCustomer = response.customer;
      this.makeMemberSuccessToast();
    },
    error=> {
      this.makeMemberErrorToast();
    })
  }

  async updateDetails() {
    console.log("*****update details");
    this.customerToUpdate = new Customer();

    const customerProfileModal = await this.modalController.create({
      component: CustomerProfileModalPage,
    });


    customerProfileModal.onDidDismiss().then((event) => {
      // console.log("****** cust: ", event.data.toUpdateCustomer);
      // console.log("****** cust: ", event.data.toUpdateCustomer == null);
        if (event.data.toUpdateCustomer != null){
        let toUpdateCustomer = event.data.toUpdateCustomer;
        // console.log("****** cust: ", event.data.toUpdateCustomer);
        this.customerService.updateCustomer(toUpdateCustomer).subscribe(
          response => {
            this.sessionService.setCurrentCustomer(response.customer);
            this.currentCustomer = response.customer;
            this.updateSuccess();
          },
          error => {
            this.updateFailure();
          });
        }
    });


    return await customerProfileModal.present();
  }

  async updateSuccess() {
    const toast = document.createElement('ion-toast');
    toast.message = "Update is Successful";
    toast.position = "top";
    toast.duration = 2000;
    toast.style.textAlign = "center";

    document.body.appendChild(toast);
    return toast.present();
  }

  async updateFailure() {
    const toast = document.createElement('ion-toast');
    toast.message = "Update is unsuccessful";
    toast.position = "top";
    toast.duration = 2000;
    toast.style.textAlign = "center";

    document.body.appendChild(toast);
    return toast.present();
  }

  async alreadyAMemberToast() {
    const toast = document.createElement('ion-toast');
    toast.message = "Hi " + this.currentCustomer.firstName + " " + this.currentCustomer.lastName + " , You Are Already A Member!";
    toast.position = "top";
    toast.duration = 2000;
    toast.style.textAlign = "center";

    document.body.appendChild(toast);
    return toast.present();
  }

  async makeMemberErrorToast() {
    const toast = document.createElement('ion-toast');
    toast.message = "There Is An Problem Making You A Member, Please Try Again Later!";
    toast.position = "top";
    toast.duration = 2000;
    toast.style.textAlign = "center";

    document.body.appendChild(toast);
    return toast.present();
  }

  async makeMemberSuccessToast() {
    const toast = document.createElement('ion-toast');
    toast.message = "Welcome " + this.currentCustomer.firstName + " " + this.currentCustomer.lastName + " , Thank You For Joining Us As A Member!";
    toast.position = "top";
    toast.duration = 2000;
    toast.style.textAlign = "center";

    document.body.appendChild(toast);
    return toast.present();
  }

}






