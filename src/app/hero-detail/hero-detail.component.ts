import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "../models/hero";
import { HeroService } from "../hero.service";

import { MessageService } from "primeng/api";

@Component({
  selector: "hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
  providers: [MessageService]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Success!",
      detail: "Hero details has been saved"
    });
  }
}
