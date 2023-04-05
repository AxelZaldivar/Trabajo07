import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//automáticamente se importa el componente Heroes porque se creo por la CLI de Angular
import { HeroesComponent } from './heroes/heroes.component';

//Permite utilizar ngModel en heroes.component.html
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here

//HttpClient es el mecanismo de Angular para comunicarse con un servidor remoto a través de HTTP
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    //se declaran los componentes para poderlos utilizar
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    //se importan para poder utilizarse correctamente en los demás componentes
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //prepara la memoria para la base de datos
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
