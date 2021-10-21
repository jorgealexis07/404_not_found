import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecuperarPassComponent} from "./recuperar-pass/recuperar-pass.component";
import {RegistroComponent} from "./registro/registro.component";

const routes: Routes = [
  {
    path:'Recuperar-pass',component:RecuperarPassComponent
  },
  {
    path:'Registro',component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
