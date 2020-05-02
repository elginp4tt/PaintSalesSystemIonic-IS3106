import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Delivery } from '../delivery';
import { DeliveryService } from '../delivery.service';

@Component({
  selector: 'app-view-all-deliveries',
  templateUrl: './view-all-deliveries.page.html',
  styleUrls: ['./view-all-deliveries.page.scss'],
})
export class ViewAllDeliveriesPage implements OnInit {

  deliveries : Delivery[];

  constructor(private router: Router,
            private deliveryService : DeliveryService) 
  {
  }

  ngOnInit() 
	{
		this.refreshDeliveries();
	}
	
	
	
	ionViewWillEnter() 
	{
    this.refreshDeliveries();
	}


  viewDeliveryDetails(event, delivery)
  {
    this.router.navigate(["/viewDeliveryDetails/" + delivery.deliveryId]);
  }


  refreshDeliveries()
  {
    this.deliveryService.getAllDeliveries().subscribe(
      response => {
        this.deliveries = response.deliveries;
        
        if(this.deliveries != null)
        {
          for(var i = 0;i<this.deliveries.length;i++)
          {
            this.deliveries[i].deliveryStartTime = new Date(this.deliveries[i].deliveryStartTime.toString().substring(0, this.deliveries[i].deliveryStartTime.toString().length - 5));
          }
          this.deliveries.sort((n1,n2) => n1.deliveryId - n2.deliveryId);
        }
        
      },
      error => {
        console.log('********** ViewAllDeliveriesPage.ts: ' + error);
      }
    );
  }

}
