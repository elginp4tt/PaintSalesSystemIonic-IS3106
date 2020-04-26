import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPaintDetailsPage } from './view-paint-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPaintDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPaintDetailsPageRoutingModule {}
