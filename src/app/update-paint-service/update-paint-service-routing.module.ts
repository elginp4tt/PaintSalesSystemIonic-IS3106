import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePaintServicePage } from './update-paint-service.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePaintServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePaintServicePageRoutingModule {}
