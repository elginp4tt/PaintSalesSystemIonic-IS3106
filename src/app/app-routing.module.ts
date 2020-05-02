import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  { path: 'viewAllPaints', loadChildren: './view-all-paints/view-all-paints.module#ViewAllPaintsPageModule', canActivate: [AuthGuard] },
  { path: 'viewPaintDetails', loadChildren: './view-paint-details/view-paint-details.module#ViewPaintDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'viewPaintDetails/:paintId', loadChildren: './view-paint-details/view-paint-details.module#ViewPaintDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'registerCustomer', loadChildren: './register/register.module#RegisterPageModule', canActivate: [AuthGuard] },
  { path: 'viewAllTransaction', loadChildren: './view-all-transactions/view-all-transactions.module#ViewAllTransactionsPageModule', canActivate: [AuthGuard] },
  { path: 'viewTransactionDetails', loadChildren: './view-transaction-details/view-transaction-details.module#ViewTransactionDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'viewTransactionDetails/:transactionId', loadChildren: './view-transaction-details/view-transaction-details.module#ViewTransactionDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'viewCart', loadChildren: './view-shopping-cart/view-shopping-cart.module#ViewShoppingCartPageModule', canActivate: [AuthGuard] },
  {
    path: 'request-refund',
    loadChildren: () => import('./request-refund/request-refund.module').then( m => m.RequestRefundPageModule)
  },
  {
    path: 'request-paint-service',
    loadChildren: () => import('./request-paint-service/request-paint-service.module').then( m => m.RequestPaintServicePageModule)
  },
  {
    path: 'request-delivery-service',
    loadChildren: () => import('./request-delivery-service/request-delivery-service.module').then( m => m.RequestDeliveryServicePageModule)
  },
  {
    path: 'viewAllPaintServices',
    loadChildren: () => import('./view-all-paint-services/view-all-paint-services.module').then( m => m.ViewAllPaintServicesPageModule)
  },
  {
    path: 'viewPaintServiceDetails/:paintServiceId',
    loadChildren: () => import('./view-paint-service-details/view-paint-service-details.module').then( m => m.ViewPaintServiceDetailsPageModule)
  },
  {
    path: 'updatePaintService/:paintServiceId',
    loadChildren: () => import('./update-paint-service/update-paint-service.module').then(m => m.UpdatePaintServicePageModule),canActivate: [AuthGuard]
  },
  {
    path: 'requestNewPaintService',
    loadChildren: () => import('./request-paint-service/request-paint-service.module').then( m => m.RequestPaintServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
