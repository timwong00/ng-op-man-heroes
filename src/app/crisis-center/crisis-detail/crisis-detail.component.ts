import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Location } from "@angular/common";

import { Crisis } from "../crisis";
import { CrisisService } from "../crisis.service";

import { MessageService } from "primeng/api";

@Component({
  selector: "app-crisis-detail",
  templateUrl: "./crisis-detail.component.html",
  styleUrls: ["./crisis-detail.component.css"],
  providers: [MessageService]
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  constructor(
    private crisisService: CrisisService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // snapshot only changes the path param in url and constructor was not called
    // by subscribing it will listen to the changes taking place in params
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get("id");
      this.getCrisis(id);
    });
  }

  getCrisis(id: number): void {
    // const id = +this.route.snapshot.paramMap.get("id");
    this.crisisService
      .getCrisis(id)
      .subscribe(crisis => (this.crisis = crisis));
  }

  goBack(): void {
    this.router.navigate(["../"], {
      relativeTo: this.route
    });
  }

  save(): void {
    this.crisisService.updateCrisis(this.crisis).subscribe(() => this.goBack());
  }

  showSuccess(): void {
    this.messageService.add({
      severity: "success",
      summary: "Success!",
      detail: "Hero details has been saved"
    });
  }
}
