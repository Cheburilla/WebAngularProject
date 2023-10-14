import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Rambro' },
      { id: 13, name: 'Brommando' },
      { id: 14, name: 'B. A. Broracus' },
      { id: 15, name: 'Brodell Walker' },
      { id: 16, name: 'Bro Hard' },
      { id: 17, name: 'MacBrover' },
      { id: 18, name: 'Brade' },
      { id: 19, name: 'Bro Dredd' },
      { id: 20, name: 'Bro In Black' },
      { id: 21, name: 'Snake Broskin' },
      { id: 22, name: 'Brominator' },
      { id: 23, name: 'Brobocop' },
    { id: 24, name: 'Indiana Brones' },
    { id: 25, name: 'Ash Brolliams' },
    { id: 26, name: 'Mr. Anderbro' },
    { id: 27, name: 'The Boondock Bros' },
    { id: 28, name: 'Brochete' },
    { id: 29, name: 'Bronan the Brobarian' },
    { id: 30, name: 'Ellen Ripbro' },
    { id: 31, name: 'Time Bro' },
    { id: 32, name: 'Broniversal Soldier' },
    { id: 33, name: 'Colonel James Broddock' },
    { id: 34, name: 'Cherry Broling' },
    { id: 35, name: 'Bro Max' },
    { id: 36, name: 'The Brode' },
    { id: 37, name: 'Double Bro Seven' },
    { id: 38, name: 'The Brodator' },
    { id: 39, name: 'The Brocketeer' },
    { id: 40, name: 'Broheart' },
    { id: 41, name: 'The Brofessional' },
    { id: 42, name: 'Broden' },
    { id: 43, name: 'Dirty Brory' },
    { id: 44, name: 'Tank Bro' },
    { id: 45, name: 'Bro Lee' },
    { id: 46, name: 'Broney Ross' },
    { id: 47, name: 'Lee Broxmas' },
    { id: 48, name: 'Bronnar Jensen' },
    { id: 49, name: 'Bro Caesar' },
    { id: 50, name: 'Broctor Death' },
    { id: 51, name: 'Toll Broad' },
    { id: 52, name: 'Trent Broser' },
    { id: 53, name: 'Xebro' },
    { id: 54, name: 'Demolition Bro' },
    { id: 55, name: 'Burt Brommer' },
    { id: 56, name: 'Seth Brondle' },
    { id: 57, name: 'Broffy' },
    { id: 58, name: 'Desperabro' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
