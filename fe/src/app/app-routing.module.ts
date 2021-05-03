import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrudCreateComponent } from "./components/crud-create/crud-create.component";
import { CrudComponent } from "./views/crud/crud.component";
import { HomeComponent } from "./views/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "crud",
    component: CrudComponent,
  },
  {
    path: "crud/create",
    component: CrudCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
