import { Component, OnInit } from "@angular/core";

import { Hero } from "../models/hero";
import { HeroService } from "../hero.service";

import { MessageService } from "primeng/api";

@Component({
  selector: "heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  secretHeroes: Hero[];
  // selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private pngMessageService: MessageService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
    this.showSuccess(name);
  }

  delete(hero: Hero): void {
    this.pngMessageService.clear("c");
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  showSuccess(name: string) {
    this.pngMessageService.add({
      severity: "success",
      summary: "Welcome!",
      detail: `Hero ${name} was added`
    });
  }

  showConfirm(name: string) {
    this.pngMessageService.clear();
    this.pngMessageService.add({
      key: "c",
      sticky: true,
      severity: "warn",
      summary: "Are you sure?",
      detail: `Confirm to delete hero ${name}`
    });
  }

  onReject() {
    this.pngMessageService.clear("c");
  }
}
