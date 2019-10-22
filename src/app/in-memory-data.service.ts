import { Injectable } from "@angular/core";
import { Hero } from "./models/hero";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Caped Baldy" },
      { id: 12, name: "Tatsumaki" },
      { id: 13, name: "Demon Cyborg" },
      { id: 14, name: "King" },
      { id: 15, name: "Child Emperor" },
      { id: 16, name: "Tanktop Master" },
      { id: 17, name: "Blast" },
      { id: 18, name: "Atomic Samurai" },
      { id: 19, name: "Bang" },
      { id: 20, name: "Watchdog Man" }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
