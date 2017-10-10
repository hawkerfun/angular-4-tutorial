import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {resolve} from "url";

@Injectable()

export class HeroService {
    /*getHeroes(): Hero[] {
        return HEROES;
    }*/

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}