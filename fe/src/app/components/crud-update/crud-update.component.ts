import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Product } from "../crud/crud.model";
import { CrudService } from "../crud/crud.service";

@Component({
  selector: "fe-crud-update",
  templateUrl: "./crud-update.component.html",
  styleUrls: ["./crud-update.component.css"],
})
export class CrudUpdateComponent implements OnInit {
  public product: Observable<Product>;
  public newProduct: Product;
  public productId: number;
  private subs: Subscription = new Subscription();

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * It's possible to add just a plus(+) before instead to use parseInt
   */
  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.product = this.crudService.readById(productId);
  }

  public update(product: Product): void {
    this.subs.add(
      this.crudService.update(product).subscribe(() => {
        this.crudService.alertMessage("Product edited!");
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
