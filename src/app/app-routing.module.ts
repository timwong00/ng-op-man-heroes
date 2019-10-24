import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { SecretHeroesComponent } from "./secret-heroes/secret-heroes.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "secret", component: SecretHeroesComponent },
  {
    path: "compose",
    component: ComposeMessageComponent,
    outlet: "popup"
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
