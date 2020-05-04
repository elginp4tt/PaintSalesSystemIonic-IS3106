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

  async updateDetails() {
    this.customerToUpdate = new Customer();

    const customerProfileModal = await this.modalController.create({
      component: CustomerProfileModalPage,
    });

    customerProfileModal.onDidDismiss().then((event) => {
      if (event.data.toUpdateCustomer != null) {
        let toUpdateCustomer = event.data.toUpdateCustomer;

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


}






