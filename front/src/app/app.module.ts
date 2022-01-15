import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { ClienteComponent } from './vistas/cliente/cliente.component';
import { RestauranteComponent } from './vistas/restaurante/restaurante.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EntrgaComponent } from './vistas/entrga/entrga.component';
import { EstadoComponent } from './vistas/estado/estado.component';
import { EstadoResComponent } from './vistas/estado-res/estado-res.component';
import { EstadoEntregaComponent } from './vistas/estado-entrega/estado-entrega.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    RestauranteComponent,
    EntrgaComponent,
    EstadoComponent,
    EstadoResComponent,
    EstadoEntregaComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
