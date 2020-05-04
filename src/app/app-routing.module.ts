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
  { path: 'registerCustomer', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'viewAllTransaction', loadChildren: './view-all-transactions/view-all-transactions.module#ViewAllTransactionsPageModule', canActivate: [AuthGuard] },
  { path: 'viewTransactionDetails', loadChildren: './view-transaction-details/view-transaction-details.module#ViewTransactionDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'viewTransactionDetails/:transactionId', loadChildren: './view-transaction-details/view-transaction-details.module#ViewTransactionDetailsPageModule', canActivate: [AuthGuard] },
  { path: 'viewCart', loadChildren: './view-shopping-cart/view-shopping-cart.module#ViewShoppingCartPageModule', canActivate: [AuthGuard] },
  { path: 'accessRightError', loadChildren: './access-right-error/access-right-error.module#AccessRightErrorPageModule' },
  { path: 'customerProfile', loadChildren: './customer-profile/customer-profile.module#CustomerProfilePageModule', canActivate: [AuthGuard] },
  {
    path: 'request-refund',
    loadChildren: () => import('./request-refund/request-refund.module').then( m => m.RequestRefundPageModule)
  },
  {
    path: 'request-paint-service',
    loadChildren: () => import('./request-paint-service/request-paint-service.module').then( m => m.RequestPaintServicePageModule)
  },
  {
    path: 'viewAllDeliveries',
    loadChildren: ()=> import('./view-all-deliveries/view-all-deliveries.module').then(m => m.ViewAllDeliveriesPageModule)
  },
  {
    path: 'viewDeliveryDetails/:deliveryId',
    loadChildren: ()=> import('./view-delivery-service-details/view-delivery-service-details.module').then(m => m.ViewDeliveryServiceDetailsPageModule)
  },
  {
    path: 'updateDelivery/:deliveryId',
    loadChildren: () => import('./update-delivery/update-delivery.module').then(m => m.UpdateDeliveryPageModule)
  },
  {
    path: 'requestNewDelivery',
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
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'mix-paint',
    loadChildren: () => import('./mix-paint/mix-paint.module').then( m => m.MixPaintPageModule)
  },
  {
    path: 'overlay-paint',
    loadChildren: () => import('./overlay-paint/overlay-paint.module').then( m => m.OverlayPaintPageModule)
  },
  {
    path: 'filter-paints-by-categories-modal',
    loadChildren: () => import('./filter-paints-by-categories-modal/filter-paints-by-categories-modal.module').then( m => m.FilterPaintsByCategoriesModalPageModule)
  },
  {
    path: 'filter-paints-by-tags-modal',
    loadChildren: () => import('./filter-paints-by-tags-modal/filter-paints-by-tags-modal.module').then( m => m.FilterPaintsByTagsModalPageModule)
  },
  {
    path: 'customer-profile-modal',
    loadChildren: () => import('./customer-profile-modal/customer-profile-modal.module').then( m => m.CustomerProfileModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
