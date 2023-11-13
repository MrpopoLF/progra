import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page'; // Asegúrate de importar tu HomePage
import { EnfermeriaPage } from './enfermeria/enfermeria.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'control',
    loadChildren: () => import('./control/control.module').then( m => m.ControlPageModule)
  },
  {
    path: 'analisis',
    loadChildren: () => import('./analisis/analisis.module').then( m => m.AnalisisPageModule)
  },
  {
    path: 'enfermeria',
    loadChildren: () => import('./enfermeria/enfermeria.module').then( m => m.EnfermeriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
