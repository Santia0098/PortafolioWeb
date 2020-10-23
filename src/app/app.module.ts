import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';

const ruta: Routes = [
  {
    path: 'inicio',
    component: ProyectosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProyectosComponent,
    FooterComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ruta,
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
