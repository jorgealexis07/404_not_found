import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./menuschoology/cursos/cursos.component";
import {GruposComponent} from "./menuschoology/grupos/grupos.component";
import {RecursosComponent} from "./menuschoology/recursos/recursos.component";
import {CalificacionesComponent} from "./menuschoology/calificaciones/calificaciones.component";
import {AccessComponent} from "./menuschoology/login/access/access.component";
import {RecuperarPassComponent} from "./menuschoology/login/recuperar-pass/recuperar-pass.component";
import {DatospersonalesComponent} from "./datospersonales/datospersonales.component";

const routes: Routes = [
  {
    path:'Cursos',component:CursosComponent
  },
  {
    path:'Grupos',component:GruposComponent
  },
  {
    path:'Recursos',component:RecursosComponent
  },
  {
    path:'Calificaciones',component:CalificacionesComponent
  },
  {
    path:'DP',component:DatospersonalesComponent
  },
  {
    path:'Login',component:AccessComponent,
    loadChildren:() => import('./menuschoology/login/login.module').then(m => m.LoginModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
