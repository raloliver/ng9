import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/components/template/header/header.service";

@Component({
  selector: "fe-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"],
})
export class CrudComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) {
    headerService.header = {
      title: "Create Product",
      icon: "storefront",
      link: "/crud",
    };
  }

  ngOnInit(): void {}

  public goToCreate(): void {
    this.router.navigate(["crud/create"]);
  }
}
