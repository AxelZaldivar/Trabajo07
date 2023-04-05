//Clase que trabaja con los heroes
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

//importacion del servicio hero.service
import { HeroService } from '../hero.service';

//definición del componente
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //Carga en heroes el array HEROES
  heroes: Hero[] = [];
  sortHeroes : Hero[] = [];

  //recibe como parametro al servicio hero.service
  constructor(private heroService: HeroService) { }

  //funcion que se ejecuta al cargar la aplicacion y manda a llamar a los heroes
  ngOnInit() {
    this.getHeroes();
  }

  //funcion que va dentro del ordenamiento de los heroes
  sortFunc(a: { puntos: number; }, b: { puntos: number; }){
    if ( a.puntos < b.puntos ){
      return 1;
    }
    if ( a.puntos > b.puntos ){
      return -1;
    }
    return 0;
  }

  //funcion para obtener los heroes desde el servicio
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  //funcion para ordenar a los heroes por puntos
  ordenar(): void{
    this.heroes.sort(this.sortFunc);
    this.heroService.sort();
  }

  //agregar heroe
  add(name: string, puntos: number): void {
    //trim elimina los espacion en blanco en los extremos del string
    name = name.trim();
    if (!name || !puntos) { return; }
    this.heroService.addHero({ name,puntos } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  //eliminar heroe
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}