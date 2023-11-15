import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { EnfermeriaPage } from './enfermeria/enfermeria.page';
import { ControlPage } from './control/control.page';
import { AnalisisPage } from './analisis/analisis.page'; // Asegúrate de importar tu AnalisisPage


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
  {
    path: 'laboratorio',
    loadChildren: () => import('./laboratorio/laboratorio.module').then( m => m.LaboratorioPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'exito',
    loadChildren: () => import('./exito/exito.module').then( m => m.ExitoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
