import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestPaintServicePage } from './request-paint-service.page';

const routes: Routes = [
  {
    path: '',
    component: RequestPaintServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestPaintServicePageRoutingModule {}
