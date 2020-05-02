import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPaintServicesPage } from './view-all-paint-services.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPaintServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPaintServicesPageRoutingModule {}
