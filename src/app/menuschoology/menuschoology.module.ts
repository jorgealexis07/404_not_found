import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuschoologyComponent } from './menuschoology.component';
import { CursosComponent } from './cursos/cursos.component';
import { GruposComponent } from './grupos/grupos.component';
import { RecursosComponent } from './recursos/recursos.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    MenuschoologyComponent,
    CursosComponent,
    GruposComponent,
    RecursosComponent,
    CalificacionesComponent
  ],
  exports: [
    MenuschoologyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MenuschoologyModule { }
