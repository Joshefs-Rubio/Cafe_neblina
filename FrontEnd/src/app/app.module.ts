import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuVistaComponent } from './menu-vista/menu-vista.component';
import { MenuPromocionesComponent } from './menu-promociones/menu-promociones.component';
import { LogInComponent } from './log-in/log-in.component';
import { CarritoVistaComponent } from './carrito-vista/carrito-vista.component';
import { DashboardAdministradorComponent } from './dashboard/dashboard-administrador/dashboard-administrador.component';
import { DashboardEmpleadoComponent } from './dashboard/dashboard-empleado/dashboard-empleado.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuVistaComponent,
    MenuPromocionesComponent,
    LogInComponent,
    CarritoVistaComponent,
    DashboardAdministradorComponent,
    DashboardEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
