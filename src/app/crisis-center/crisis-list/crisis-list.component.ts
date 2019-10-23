import { Component, OnInit } from "@angular/core";

import { CrisisService } from "../crisis.service";
import { Crisis } from "../crisis";

@Component({
  selector: "app-crisis-list",
  templateUrl: "./crisis-list.component.html",
  styleUrls: ["./crisis-list.component.css"]
})
export class CrisisListComponent implements OnInit {
  crises: Crisis[];
  selectedId: number;

  constructor(private crisisService: CrisisService) {}

  ngOnInit() {
    this.getCrises();
  }

  getCrises() {
    this.crisisService.getCrises().subscribe(crises => {
      this.crises = crises;
    });
  }
}
