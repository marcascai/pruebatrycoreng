import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PlanetaEditarComponent } from './components/planeta-editar/planeta-editar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PlanetaTopComponent } from './components/planeta-top/planeta-top.component';
import { PersonaTopComponent } from './components/persona-top/persona-top.component';

const appRoutes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'personas', component:PersonasComponent},
  {path: 'edit/:id', component:PersonaEditarComponent},
  {path: 'planetas', component:PlanetasComponent},
  {path: 'editplanetas/:id', component:PlanetaEditarComponent},
  {path: 'personastop', component:PersonaTopComponent},
  {path: 'planetastop', component:PlanetaTopComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    NavbarComponent,
    PersonaEditarComponent,
    PlanetasComponent,
    PlanetaEditarComponent,
    InicioComponent,
    PlanetaTopComponent,
    PersonaTopComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
