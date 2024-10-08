import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [authGuard]
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then(m => m.LoaderPageModule)
  },

  {
    path: 'newtask',
    loadChildren: () => import('./newtask/newtask.module').then(m => m.NewtaskPageModule), canActivate: [authGuard]
  },
  {
    path: 'taskedit',
    loadChildren: () => import('./taskedit/taskedit.module').then(m => m.TaskeditPageModule), canActivate: [authGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
