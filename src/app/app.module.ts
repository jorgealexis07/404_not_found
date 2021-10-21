import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuschoologyModule} from "./menuschoology/menuschoology.module";
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';

@NgModule({
  declarations: [
    AppComponent,
    PiedepaginaComponent,
    DatospersonalesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenuschoologyModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
