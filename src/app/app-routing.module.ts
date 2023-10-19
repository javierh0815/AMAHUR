import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: ':idcam/camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'detalle-asignatura',
    loadChildren: () => import('./pages/detalle-asignatura/detalle-asignatura.module').then( m => m.DetalleAsignaturaPageModule)
  },
 
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: ':idlist/lista-asignaturas',
    loadChildren: () => import('./pages/lista-asignaturas/lista-asignaturas.module').then( m => m.ListaAsignaturasPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redireccionLogin},
    path: 'perfil-usuario/:nombreuser',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
