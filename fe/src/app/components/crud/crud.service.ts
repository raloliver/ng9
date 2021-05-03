import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  constructor(private snackBar: MatSnackBar) {}

  alertMessage(text: string): void {
    this.snackBar.open(text, "Fechar", {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
