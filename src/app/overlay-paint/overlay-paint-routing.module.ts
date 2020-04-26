import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverlayPaintPage } from './overlay-paint.page';

const routes: Routes = [
  {
    path: '',
    component: OverlayPaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverlayPaintPageRoutingModule {}
