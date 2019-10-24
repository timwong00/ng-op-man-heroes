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

  constructor(private crisisService: CrisisService) {}

  ngOnInit(): void {
    this.getCrises();
  }

  // CRISIS list wont change after input changed + saved
  // CRISIS details router outlet wont change details when clicked on other crises

  getCrises(): void {
    this.crisisService.getCrises().subscribe(crises => {
      this.crises = crises;
    });
  }
}
