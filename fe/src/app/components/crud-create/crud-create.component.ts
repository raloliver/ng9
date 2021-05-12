import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Product } from "../crud/crud.model";
import { CrudService } from "../crud/crud.service";

@Component({
  selector: "fe-crud-create",
  templateUrl: "./crud-create.component.html",
  styleUrls: ["./crud-create.component.css"],
})
export class CrudCreateComponent implements OnInit, OnDestroy {
  public product: Product = {
    name: null,
    price: null,
  };
  private subs: Subscription = new Subscription();
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {}

  public create(): void {
    this.subs.add(
      this.crudService.create(this.product).subscribe(() => {
        this.crudService.alertMessage("Product created!");
        this.router.navigate(["/crud"]);
      })
    );
  }

  public goBack(): void {
    this.router.navigate(["/crud"]);
  }

  /**
   * Called once, before the instance is destroyed.
   * Add 'implements OnDestroy' to the class.
   *
   * @memberof CrudCreateComponent
   */
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
