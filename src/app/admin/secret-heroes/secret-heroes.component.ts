import { Component, OnInit } from "@angular/core";
// import { HeroService } from "../../hero.service";
// import { Hero } from "../../models/hero";

@Component({
  selector: "app-secret-heroes",
  templateUrl: "./secret-heroes.component.html",
  styleUrls: ["./secret-heroes.component.css"]
})
export class SecretHeroesComponent implements OnInit {
  // secretHeroes: Hero[];
  constructor() {}

  ngOnInit() {
    // this.getSecretHeroes();
  }

  // getSecretHeroes(): void {
  //   this.heroService.getSecretHeroes().subscribe(secretHeroes => {
  //     this.secretHeroes = secretHeroes;
  //   });
  // }
}
