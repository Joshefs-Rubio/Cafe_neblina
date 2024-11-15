import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuVistaComponent } from './menu-vista/menu-vista.component';
import { MenuPromocionesComponent } from './menu-promociones/menu-promociones.component';
import { LogInComponent } from './log-in/log-in.component';
import { CarritoVistaComponent } from './carrito-vista/carrito-vista.component';
import { DashboardAdministradorComponent } from './dashboard/dashboard-administrador/dashboard-administrador.component';
import { DashboardEmpleadoComponent } from './dashboard/dashboard-empleado/dashboard-empleado.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuVistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
