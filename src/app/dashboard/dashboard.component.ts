import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  //crea un arreglo de heroes
  heroes: Hero[] = [];

  //recibe como parametro al servicio hero.service
  constructor(private heroService: HeroService) { }

  //funcion que se ejecuta al cargar la aplicacion y llama a los heroes
  ngOnInit() {
    this.getHeroes();
  }

  /*funcion para obtener los heroes desde el servicio. Devuelve la lista dividida de héroes en las
  posiciones 1 y 5, devolviendo solo cuatro de los mejores héroes (segundo, tercero, cuarto y quinto)*/
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}