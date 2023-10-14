import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes!: Observable<Hero[]>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.pipe(tap(_ => _.push(hero)));
      });
  } // TODO: Unsubscribe

  delete(hero: Hero): void {
    this.heroes = this.heroes.pipe(tap(_ => _.filter(h => h !== hero)));
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
