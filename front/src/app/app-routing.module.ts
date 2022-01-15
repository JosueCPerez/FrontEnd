import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component'
import { ClienteComponent } from './vistas/cliente/cliente.component'
import { RestauranteComponent } from './vistas/restaurante/restaurante.component'
import { EntrgaComponent } from './vistas/entrga/entrga.component'
import { EstadoComponent } from './vistas/estado/estado.component'
import { EstadoResComponent } from './vistas/estado-res/estado-res.component'
import { EstadoEntregaComponent } from './vistas/estado-entrega/estado-entrega.component'

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'cliente', component:ClienteComponent},
  {path:'restaurante', component:RestauranteComponent},
  {path:'entrega', component:EntrgaComponent},
  {path:'estado', component:EstadoComponent},
  {path:'estadoRes', component:EstadoResComponent},
  {path:'estadoEntrega', component:EstadoEntregaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComonents=[LoginComponent]