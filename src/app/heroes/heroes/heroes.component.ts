import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDataService } from '../hero-data.service';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private dateHeroService: HeroDataService) { }

  ngOnInit(): void {
    this.dateHeroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);


  }

  getHeroes(){
    return this.dateHeroService.getHeroes();
  }

}
