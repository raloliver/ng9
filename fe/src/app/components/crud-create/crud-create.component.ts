import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../crud/crud.model";
import { CrudService } from "../crud/crud.service";

@Component({
  selector: "fe-crud-create",
  templateUrl: "./crud-create.component.html",
  styleUrls: ["./crud-create.component.css"],
})
export class CrudCreateComponent implements OnInit {
  public product: Product = {
    name: null,
    price: null,
  };
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {}

  public create(): void {
    this.crudService.create(this.product).subscribe(() => {
      this.crudService.alertMessage("Produto criado!");
      this.router.navigate(["/crud"]);
    });
  }

  public goBack(): void {
    this.router.navigate(["/crud"]);
  }
}
