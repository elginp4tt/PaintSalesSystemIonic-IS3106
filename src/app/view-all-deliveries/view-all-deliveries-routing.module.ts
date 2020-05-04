import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllDeliveriesPage } from './view-all-deliveries.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllDeliveriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllDeliveriesPageRoutingModule {}
