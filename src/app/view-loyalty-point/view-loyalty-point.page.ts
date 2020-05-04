import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { SessionService } from '../session.service';
import { AlertController } from '@ionic/angular';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-loyalty-point',
  templateUrl: './view-loyalty-point.page.html',
  styleUrls: ['./view-loyalty-point.page.scss'],
})
export class ViewLoyaltyPointPage implements OnInit {

  loyaltyPoint : number;
  customerLastName : string;
  enteredPoint : number;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionService : SessionService,
    private alertController : AlertController,
    private cartService : CartService,
    private location : Location) 
  {
    this.enteredPoint = 0;
  }

  ngOnInit() 
  {
    this.loyaltyPoint = parseInt(this.activatedRoute.snapshot.paramMap.get('loyaltyPoint'));
    this.customerLastName = this.sessionService.getCurrentCustomer().lastName;
  }

  ionViewWillEnter()
  {
    this.enteredPoint = 0;
  }

  getDiscount()
  {
    if(this.enteredPoint > this.loyaltyPoint)
    {
      this.showExceedMsg();
    }
    else
    {
      this.cartService.setLoyaltyPoint(this.loyaltyPoint - this.enteredPoint);
      console.log("remaining pts is:" + (this.loyaltyPoint - this.enteredPoint));
      this.location.back();
    }
  }

  async showExceedMsg() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Enter amount exceeds what you have!',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
