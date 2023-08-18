import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutpaginaComponent } from './layoutpagina/layoutpagina.component';
import { Error404Component } from './errors/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LayoutpaginaComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
