import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestDeliveryServicePage } from './request-delivery-service.page';

const routes: Routes = [
  {
    path: '',
    component: RequestDeliveryServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestDeliveryServicePageRoutingModule {}
