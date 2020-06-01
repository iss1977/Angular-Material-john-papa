import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class HeroDataService {

  constructor(private httpClient: HttpClient) { }

  getHeroes() {
    return this.httpClient.get<Hero[]>('heroes.json');
  }

}
