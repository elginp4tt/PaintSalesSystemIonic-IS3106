import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPaintsByCategoriesModalPage } from './filter-paints-by-categories-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPaintsByCategoriesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPaintsByCategoriesModalPageRoutingModule {}
