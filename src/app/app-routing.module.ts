import { NgModule } from '@angular/core';

//se importan para que la app tenga funcionalidades de enrutamiento
import { RouterModule, Routes } from '@angular/router';

//le dará al enrutador un lugar adonde ir una vez que configure las rutas
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/*Las Rutas le indican al enrutador qué vista mostrar cuando un usuario hace clic en un enlace
o pega una URL en la barra de direcciones del navegador*/
const routes: Routes = [
  //ruta por defecto
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //rutas especificas
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

//inicializan el enrutador y lo hacen escuchar los cambios de ubicación del navegador
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//exporta la clase para que esté disponible en toda la aplicación
export class AppRoutingModule { }
