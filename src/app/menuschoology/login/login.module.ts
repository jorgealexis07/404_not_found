import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AccessComponent } from './access/access.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    AccessComponent,
    RecuperarPassComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
