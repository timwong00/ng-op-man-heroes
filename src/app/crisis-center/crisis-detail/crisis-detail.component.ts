import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    private location: Location,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCrisis();
  }

  getCrisis(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.crisisService
      .getCrisis(id)
      .subscribe(crisis => (this.crisis = crisis));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.crisisService.updateCrisis(this.crisis).subscribe(() => this.goBack());
  }

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Success!",
      detail: "Hero details has been saved"
    });
  }
}
