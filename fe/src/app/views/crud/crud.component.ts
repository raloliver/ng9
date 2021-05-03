import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "fe-crud",
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.css"],
})
export class CrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreate(): void {
    this.router.navigate(["crud/create"]);
  }
}
