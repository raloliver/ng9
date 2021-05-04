import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Product } from "./crud.model";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private endpoint = "http://localhost:3000/";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  public alertMessage(text: string): void {
    this.snackBar.open(text, "Fechar", {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  /**
   * Observable é um event base pattern
   * No ocorrer de determinado evento, o código é chamado de forma reativa
   */
  public create(item: Product, type: string = "products"): Observable<Product> {
    return this.http.post<Product>(this.endpoint + type, item);
  }

  public read(type: string = "products"): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint + type);
  }
}