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
    this.snackBar.open(text, "Close", {
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

  /**
   * parametros para paginação ?_page=1&_limit=1
   */
  public read(type: string = "products"): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint + type);
  }

  public readById(id: number, type: string = "products"): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}${type}/${id}`);
  }

  public update(item: Product, type: string = "products"): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}${type}/${item.id}`, item);
  }
}
