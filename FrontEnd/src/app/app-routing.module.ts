import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuVistaComponent } from './menu-vista/menu-vista.component';
import { MenuPromocionesComponent } from './menu-promociones/menu-promociones.component';
import { LogInComponent } from './log-in/log-in.component';
import { CarritoVistaComponent } from './carrito-vista/carrito-vista.component';
import { DashboardAdministradorComponent } from './dashboard/dashboard-administrador/dashboard-administrador.component';
import { DashboardEmpleadoComponent } from './dashboard/dashboard-empleado/dashboard-empleado.component';
import { TerminosComponent } from './terminos-condiciones/terminos/terminos.component';
import { SobreNosotrosComponent } from './terminos-condiciones/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuVistaComponent },
  { path: 'promociones', component: MenuPromocionesComponent },
  { path: 'login', component: LogInComponent },
  { path: 'carrito', component: CarritoVistaComponent },
  { path: 'dashboard-administrador', component: DashboardAdministradorComponent },
  { path: 'dashboard-empleado', component: DashboardEmpleadoComponent},
  { path: 'terminos', component: TerminosComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
