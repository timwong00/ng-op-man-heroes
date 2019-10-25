import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from "./admin/admin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { ManageCrisesComponent } from "./manage-crises/manage-crises.component";
import { ManageHeroesComponent } from "./manage-heroes/manage-heroes.component";
import { SecretHeroesComponent } from "./secret-heroes/secret-heroes.component";

import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    SecretHeroesComponent
  ]
})
export class AdminModule {}
