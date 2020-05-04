import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLoyaltyPointPage } from './view-loyalty-point.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLoyaltyPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLoyaltyPointPageRoutingModule {}
