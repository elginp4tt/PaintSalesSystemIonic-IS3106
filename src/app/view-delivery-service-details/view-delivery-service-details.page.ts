import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Delivery } from '../delivery';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-view-delivery-service-details',
  templateUrl: './view-delivery-service-details.page.html',
  styleUrls: ['./view-delivery-service-details.page.scss'],
})
export class ViewDeliveryServiceDetailsPage implements OnInit {

  deliveryId: number;
  deliveryToView: Delivery;
  retrieveDeliveryError: boolean;


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private location : Location,
    private deliveryService: DeliveryService) 
    {
      this.retrieveDeliveryError = false;
  }

  ngOnInit() {
    this.deliveryId = parseInt(this.activatedRoute.snapshot.paramMap.get('deliveryId'));
    this.refreshDelivery();
  }

  ionViewWillEnter() 
  {
    this.refreshDelivery();
  }



  refreshDelivery() 
  {
    this.deliveryService.getDeliveryById(this.deliveryId).subscribe
    (
      response => {
        this.deliveryToView = response.delivery;
        this.deliveryToView.deliveryStartTime = new Date(this.deliveryToView.deliveryStartTime.toString().substring(0, this.deliveryToView.deliveryStartTime.toString().length - 5));
      },
      error => {
        this.retrieveDeliveryError = true;
      }
    );
  }


  updateDelivery()
  {
    this.router.navigate(["/updateDelivery/" + this.deliveryToView.deliveryId]);
  }

  back()
	{
		this.location.back();
	}

}
