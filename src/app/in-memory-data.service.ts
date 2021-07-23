import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
    const heroes = [
      { id: 10, name: 'Dr choco' },
    { id: 11, name: 'Narco' },
    { id: 12, name: 'Bombasto' },
    { id: 13, name: 'Celeritas' },
    { id: 14, name: 'Magneta' },
    { id: 15, name: 'RubberMan' },
    { id: 16, name: 'Dynama' },
    { id: 17, name: 'Dr IQ' },
    { id: 18, name: 'Magma' },
    { id: 19, name: 'Tornado' },
    { id: 20, name: 'Tomato'}
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  
  }

  constructor() { }
}
