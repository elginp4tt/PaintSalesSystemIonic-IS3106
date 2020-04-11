import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewPaintPage } from './create-new-paint.page';

const routes: Routes = [
  {
    path: '',
    component: CreateNewPaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewPaintPageRoutingModule {}
