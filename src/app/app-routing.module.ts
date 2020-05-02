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
  { path: 'createNewPaint', loadChildren: './create-new-paint/create-new-paint.module#CreateNewPaintPageModule', canActivate: [AuthGuard] },
  { path: 'viewAllPaints', loadChildren: './view-all-paints/view-all-paints.module#ViewAllPaintsPageModule', canActivate: [AuthGuard] },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'viewAllDeliveries',
    loadChildren: () => import('./view-all-deliveries/view-all-deliveries.module').then( m => m.ViewAllDeliveriesPageModule)
  },
  {
    path: 'viewDeliveryDetails/:deliveryId',
    loadChildren: () => import('./view-delivery-service-details/view-delivery-service-details.module').then(m => m.ViewDeliveryServiceDetailsPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'updateDelivery/:deliveryId',
    loadChildren: './update-delivery/update-delivery.module#UpdateDeliveryPageModule', canActivate: [AuthGuard]
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
