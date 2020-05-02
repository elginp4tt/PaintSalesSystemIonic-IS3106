import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

import { Delivery } from '../delivery';
import { DeliveryService } from '../delivery.service';
import { CartService } from '../cart.service';
import { DeliveryServiceTransaction } from '../delivery-service-transaction';



@Component({
  selector: 'app-request-delivery-service',
  templateUrl: './request-delivery-service.page.html',
  styleUrls: ['./request-delivery-service.page.scss'],
})
export class RequestDeliveryServicePage implements OnInit {

  newDelivery: Delivery;
  submitted: boolean;
  resultSuccess: boolean;
  resultError: boolean;
  message: string;
  selectedDate: Date;
  displaySubmitButton: boolean;

  newDeliveryServiceTransaction: DeliveryServiceTransaction;

  @ViewChild('slides', { static: false }) slides;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private deliveryService: DeliveryService,
    private cartService: CartService) {
    this.submitted = false;

    this.newDelivery = new Delivery();
    this.selectedDate = new Date();
    this.resultSuccess = false;
    this.resultError = false;

    this.displaySubmitButton = false;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.clear();
    this.slides.slideTo(0);
  }


  clear() {
    this.submitted = false;
    this.newDelivery = new Delivery();
    this.selectedDate = new Date();
    this.resultSuccess = false;
    this.resultError = false;
    this.displaySubmitButton = false;

  }

  create(createNewDeliveryForm: NgForm) {
    this.submitted = true;

    if (createNewDeliveryForm.valid) {

      this.newDelivery.deliveryStartTime = this.selectedDate;
      this.deliveryService.createDelivery(this.newDelivery).subscribe
        (
          response => {
            this.resultSuccess = true;
            this.resultError = false;
            this.message = "New delivery created successfully";
            this.showMessage(this.message);
            this.displaySubmitButton = false;
            this.newDeliveryServiceTransaction = response.deliveryServiceTransaction;

          },
          error => {
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while creating the new delivery: " + error;
            this.showMessage(this.message);
          }
        )
    }
    else {
      if (!this.newDelivery.locationAddress) {
        this.showMessage("Location is required.");
      }
      else if (!this.newDelivery.postalCode) {
        this.showMessage("Postal code is required.");
      }
    }
  }

  get convert(): string {
    return this.selectedDate.toISOString();
  }

  set convert(value: string) {
    this.selectedDate = new Date(value);
  }

  checkSlideIndex() {
    this.slides.getActiveIndex().then(index => {
      if (index == 2) {
        this.displaySubmitButton = true;
      }
      else {
        this.displaySubmitButton = false;
      }
    });
  }

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: message
    });

    await toast.present();
  }


  viewCart() {
    this.cartService.addItem(this.newDeliveryServiceTransaction);
    this.router.navigate(['/viewCart']);
  }


}
