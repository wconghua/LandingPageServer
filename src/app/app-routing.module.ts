import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DatasetsComponent } from "./datasets/datasets.component";
import { DatasetDetailComponent } from "./dataset-detail/dataset-detail.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: DatasetDetailComponent },
  { path: "datasets", component: DatasetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
