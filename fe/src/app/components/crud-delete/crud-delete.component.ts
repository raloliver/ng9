import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Product } from "../crud/crud.model";
import { CrudService } from "../crud/crud.service";

@Component({
  selector: "fe-crud-delete",
  templateUrl: "./crud-delete.component.html",
  styleUrls: ["./crud-delete.component.css"],
})
export class CrudDeleteComponent implements OnInit {
  public product: Observable<Product>;
  public newProduct: Product;
  public productId: number;
  private subs: Subscription = new Subscription();

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.product = this.crudService.readById(productId);
  }

  public delete(productId: number): void {
    this.subs.add(
      this.crudService.delete(productId).subscribe(() => {
        this.crudService.alertMessage("Product deleted!");
        this.router.navigate(["/crud"]);
      })
    );
  }

  public goBack(): void {
    this.router.navigate(["/crud"]);
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
