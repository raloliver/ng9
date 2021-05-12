import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { CrudCreateComponent } from "./components/crud-create/crud-create.component";
import { CrudUpdateComponent } from "./components/crud-update/crud-update.component";
import { CrudDeleteComponent } from "./components/crud-delete/crud-delete.component";
import { CrudComponent } from "./views/crud/crud.component";

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
  {
    path: "crud/update/:id",
    component: CrudUpdateComponent,
  },
  {
    path: "crud/delete/:id",
    component: CrudDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
