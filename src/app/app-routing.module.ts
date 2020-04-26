import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 're-sintomas',
    loadChildren: () => import('./re-sintomas/re-sintomas.module').then( m => m.ReSintomasPageModule)
  },
  {
    path: 'sintomas',
    loadChildren: () => import('./sintomas/sintomas.module').then( m => m.SintomasPageModule)
  },
  {
    path: 're-visita',
    loadChildren: () => import('./re-visita/re-visita.module').then( m => m.ReVisitaPageModule)
  },
  {
    path: 'visitas',
    loadChildren: () => import('./visitas/visitas.module').then( m => m.VisitasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
