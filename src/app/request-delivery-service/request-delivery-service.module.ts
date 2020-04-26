import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestDeliveryServicePageRoutingModule } from './request-delivery-service-routing.module';

import { RequestDeliveryServicePage } from './request-delivery-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestDeliveryServicePageRoutingModule
  ],
  declarations: [RequestDeliveryServicePage]
})
export class RequestDeliveryServicePageModule {}
