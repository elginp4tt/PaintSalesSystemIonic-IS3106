import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { PaintService } from '../paint-service';
import { PaintServiceService } from '../paint-service.service';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular'; 
import { PaintServiceTransaction } from '../paint-service-transaction';
import { CartService } from '../cart.service';
import { TransactionLineItem } from '../transaction-line-item';

@Component({
  selector: 'app-request-paint-service',
  templateUrl: './request-paint-service.page.html',
  styleUrls: ['./request-paint-service.page.scss'],
})
export class RequestPaintServicePage implements OnInit {

  newPaintService : PaintService;
  submitted : boolean;
  resultSuccess: boolean;
	resultError: boolean;
  message: string;
  selectedDate: Date;
  displaySubmitButton : boolean;

  newPaintServiceTransaction : PaintServiceTransaction;

  @ViewChild('slides', { static: false }) slides;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController : ToastController,
    private paintServiceService : PaintServiceService,
    private cartService : CartService) 
  {
    this.submitted = false;
    this.newPaintService = new PaintService();
    this.selectedDate = new Date();
    this.resultSuccess = false;
    this.resultError = false;

    this.displaySubmitButton = false;
  }

  ngOnInit() {
  }

  ionViewWillEnter() 
  {
    this.clear();
    this.slides.slideTo(0);
  }


  clear() 
  {
    this.submitted = false;
    this.newPaintService = new PaintService();
    this.selectedDate = new Date();
    this.resultSuccess = false;
    this.resultError = false;
    this.displaySubmitButton = false;

  }


  create(createPaintServiceForm : NgForm)
  {
    this.submitted  = true;

    if(createPaintServiceForm.valid)
    {
      this.newPaintService.paintServiceStartTime = this.selectedDate;
      this.paintServiceService.createPaintService(this.newPaintService).subscribe
      (
        response => {
          this.resultSuccess = true;
					this.resultError = false;
          this.message = "New paint service created successfully";
          this.showMessage(this.message);
          this.displaySubmitButton = false;
					this.newPaintServiceTransaction = response.paintServiceTransaction;
          createPaintServiceForm.reset();
        },
        error => {
          this.resultError = true;
					this.resultSuccess = false;
          this.message = "An error has occurred while creating the new paint service: " + error;
          this.showMessage(this.message);
        }
      )
    }
    else
    {
      if(!this.newPaintService.locationAddress)
      {
        this.showMessage("Location is required.");
      }
      else if(!this.newPaintService.postalCode)
      {
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

  checkSlideIndex(slides : IonSlides)
  {
    slides.getActiveIndex().then(index => {
      if(index == 2)
      {
        this.displaySubmitButton = true;
      }
      else
      {
        this.displaySubmitButton = false;
      }
    });
  }

  async showMessage(message : string) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: message
    });

    await toast.present();
  }

  viewCart() {
    let transactionLineItem : TransactionLineItem = new PaintServiceTransaction(null, "Paint Service",1,200,this.newPaintServiceTransaction.paintService);
    this.cartService.addItem(transactionLineItem);
    this.router.navigate(['/viewCart']);
  }

}
