import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPaintsByTagsModalPage } from './filter-paints-by-tags-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPaintsByTagsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPaintsByTagsModalPageRoutingModule {}
