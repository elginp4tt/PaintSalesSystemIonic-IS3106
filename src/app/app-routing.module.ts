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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
