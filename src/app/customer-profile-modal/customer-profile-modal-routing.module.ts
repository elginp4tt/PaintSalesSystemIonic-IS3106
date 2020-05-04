import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerProfileModalPage } from './customer-profile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerProfileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerProfileModalPageRoutingModule {}
