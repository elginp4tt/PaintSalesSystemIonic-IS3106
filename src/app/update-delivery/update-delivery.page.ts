import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Delivery } from '../delivery';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.page.html',
  styleUrls: ['./update-delivery.page.scss'],
})
export class UpdateDeliveryPage implements OnInit {

  deliveryId: number;
  deliveryToUpdate: Delivery;
  retrieveDeliveryError: boolean;

  convertedDate: Date;

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router,
    private location : Location,
    private activatedRoute: ActivatedRoute,
    private deliveryService: DeliveryService, ) 
    {

    this.retrieveDeliveryError = false;
    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.deliveryId = parseInt(this.activatedRoute.snapshot.paramMap.get('deliveryId'));

    this.deliveryService.getDeliveryById(this.deliveryId).subscribe
      (
        response => {
          this.deliveryToUpdate = response.delivery;
          this.convertedDate = new Date(this.deliveryToUpdate.deliveryStartTime.toString().substring(0, this.deliveryToUpdate.deliveryStartTime.toString().length - 5));
        },
        error => {
          this.retrieveDeliveryError = true;
        }
      );
  }



  update(updateDeliveryForm: NgForm) {
    this.deliveryToUpdate.deliveryStartTime = this.convertedDate;

    if (updateDeliveryForm.valid) {
      this.deliveryService.updateDelivery(this.deliveryToUpdate).subscribe
        (
          respone => {
            this.resultSuccess = true;
            this.resultError = false;
            this.message = "Delivery updated successfully";
          },
          error => {
            this.resultError = true;
            this.resultSuccess = false;
            this.message = "An error has occurred while updating the delivery: " + error;
          }
        );
    }
  }

  get convert(): string {
    return this.convertedDate.toISOString();
  }

  set convert(value: string) {
    this.convertedDate = new Date(value);
  }

  back()
	{
		this.location.back();
	}

}
