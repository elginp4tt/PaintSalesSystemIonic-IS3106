import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDeliveryPage } from './update-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDeliveryPageRoutingModule {}
