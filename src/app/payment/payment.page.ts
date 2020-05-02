import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  cardNum: string;
  expiryDate: Date;
  cardCode: string;
  showProgressBar: boolean;

  constructor(private cartService: CartService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.expiryDate = new Date();
    this.showProgressBar = false;
  }

  ngOnInit() 
  {
  }

  ionViewWillEnter() 
  {
  }

  create(createNewPaymentForm: NgForm) {
    if (createNewPaymentForm.valid) {
      if (this.expiryDate > new Date()) {
        this.showProgressBar = true;
        console.log("to persist the shopping cart");
      }
      else {
        this.showMessage("Your card has expired.");
      }
    }
    else {
      if (!this.cardNum) {
        this.showMessage("Card number is required.");
      }
      else if (!this.cardCode) {
        this.showMessage("Card code is required.");
      }
    }
  }

  get convert(): string {
    return this.expiryDate.toISOString();
  }

  set convert(value: string) {
    this.expiryDate = new Date(value);
  }

  async showMessage(message: string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: message
    });

    await toast.present();
  }

}
