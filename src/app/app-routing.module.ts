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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'createNewPaint', loadChildren: './create-new-paint/create-new-paint.module#CreateNewPaintPageModule', canActivate: [AuthGuard] },
  { path: 'viewAllPaints', loadChildren: './view-all-paints/view-all-paints.module#ViewAllPaintsPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: '/login/login.module#loginPageModule', canActivate: [AuthGuard] },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'view-shopping-cart',
    loadChildren: () => import('./view-shopping-cart/view-shopping-cart.module').then(m => m.ViewShoppingCartPageModule)
  },
  {
    path: 'view-all-transactions',
    loadChildren: () => import('./view-all-transactions/view-all-transactions.module').then(m => m.ViewAllTransactionsPageModule)
  },
  {
    path: 'view-transaction-details',
    loadChildren: () => import('./view-transaction-details/view-transaction-details.module').then(m => m.ViewTransactionDetailsPageModule)
  },
  {
    path: 'request-refund',
    loadChildren: () => import('./request-refund/request-refund.module').then(m => m.RequestRefundPageModule)
  },
  {
    path: 'view-paint-details',
    loadChildren: () => import('./view-paint-details/view-paint-details.module').then(m => m.ViewPaintDetailsPageModule)
  },
  {
    path: 'request-paint-service',
    loadChildren: () => import('./request-paint-service/request-paint-service.module').then(m => m.RequestPaintServicePageModule)
  },
  {
    path: 'request-delivery-service',
    loadChildren: () => import('./request-delivery-service/request-delivery-service.module').then(m => m.RequestDeliveryServicePageModule)
  },
  {
    path: 'view-paint-service-details',
    loadChildren: () => import('./view-paint-service-details/view-paint-service-details.module').then(m => m.ViewPaintServiceDetailsPageModule)
  },
  {
    path: 'view-delivery-service-details',
    loadChildren: () => import('./view-delivery-service-details/view-delivery-service-details.module').then(m => m.ViewDeliveryServiceDetailsPageModule)
  },
  {
    path: 'mix-paint',
    loadChildren: () => import('./mix-paint/mix-paint.module').then(m => m.MixPaintPageModule)
  },
  {
    path: 'overlay-paint',
    loadChildren: () => import('./overlay-paint/overlay-paint.module').then(m => m.OverlayPaintPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
