import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDeliveryServiceDetailsPage } from './view-delivery-service-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDeliveryServiceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDeliveryServiceDetailsPageRoutingModule {}
