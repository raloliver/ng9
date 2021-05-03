import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CrudService } from "../crud/crud.service";

@Component({
  selector: "fe-crud-create",
  templateUrl: "./crud-create.component.html",
  styleUrls: ["./crud-create.component.css"],
})
export class CrudCreateComponent implements OnInit {
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.crudService.alertMessage("Produto criado!");
  }

  goBack(): void {
    this.router.navigate(["/crud"]);
  }
}
