import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixPaintPage } from './mix-paint.page';

const routes: Routes = [
  {
    path: '',
    component: MixPaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixPaintPageRoutingModule {}
