import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  { path: 'viewAllBooks', loadChildren: './view-all-books/view-all-books.module#ViewAllBooksPageModule', canActivate: [AuthGuard] },
  { path: 'createNewBook', loadChildren: './create-new-book/create-new-book.module#CreateNewBookPageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
