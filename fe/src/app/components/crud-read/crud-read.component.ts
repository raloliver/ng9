import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../crud/crud.model";
import { CrudService } from "../crud/crud.service";

@Component({
  selector: "fe-crud-read",
  templateUrl: "./crud-read.component.html",
  styleUrls: ["./crud-read.component.css"],
})
export class CrudReadComponent implements OnInit {
  public products: Observable<Product[]>;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.products = this.crudService.read();
  }
}
