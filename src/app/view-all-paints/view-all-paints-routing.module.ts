import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPaintsPage } from './view-all-paints.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllPaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllPaintsPageRoutingModule {}
