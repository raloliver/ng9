import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './views/crud/crud.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "crud",
  component: CrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
