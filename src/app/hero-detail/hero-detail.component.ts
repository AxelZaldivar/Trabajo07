import { Component, OnInit } from '@angular/core';
//importamos la clase Hero
import { Hero } from '../hero';

//importaciones para obtener el id del URL
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //agregar una entrada de tipo Hero
  //para corregir el error tuvo que quedar así (original: hero: Hero;)
  hero!: Hero;

  //agregar las importaciones que obtendran el id del URL en el constructor
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  //funcion para obtener un heroe
  //(this: any) lo puse yo porque marcaba error
  getHero(this: any): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe((hero: Hero | undefined) => this.hero = hero);
  }

  //funcion para regresar
  goBack(): void {
    this.location.back();
  }

  //funcion para guardar el nuevo nombre del heroe
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}