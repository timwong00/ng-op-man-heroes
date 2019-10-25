import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CrisisService } from "../crisis.service";
import { Crisis } from "../crisis";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-crisis-list",
  templateUrl: "./crisis-list.component.html",
  styleUrls: ["./crisis-list.component.css"]
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  crises: Crisis[];
  selectedId: number;

  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.crises$ = this.crisisService.getCrises();
    this.crisisService.refreshNeeded$.subscribe(() => {
      this.getCrises();
    });

    this.getCrises();
  }

  getCrises(): void {
    this.crisisService.getCrises().subscribe(crises => {
      this.crises = crises;
    });
  }
}
