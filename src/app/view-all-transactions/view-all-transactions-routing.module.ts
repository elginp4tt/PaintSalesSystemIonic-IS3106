import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllTransactionsPage } from './view-all-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllTransactionsPageRoutingModule {}
