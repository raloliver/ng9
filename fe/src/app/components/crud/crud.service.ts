import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Product } from "./crud.model";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private endpoint = "http://localhost:3000/";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  public alertMessage(text: string, isError: boolean = false): void {
    this.snackBar.open(text, "Close", {
      duration: 2500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["red-snackbar"] : null,
    });
  }

  /**
   * Observable é um event base pattern
   * No ocorrer de determinado evento, o código é chamado de forma reativa
   */
  public create(item: Product, type: string = "products"): Observable<Product> {
    return this.http.post<Product>(this.endpoint + type, item).pipe(
      map((item) => item),
      catchError((error) => this.errorHandler(error))
    );
  }

  /**
   * parametros para paginação ?_page=1&_limit=1
   */
  public read(type: string = "products"): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint + type).pipe(
      map((items) => items),
      catchError((error) => this.errorHandler(error))
    );
  }

  public readById(id: number, type: string = "products"): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}${type}/${id}`).pipe(
      map((item) => item),
      catchError((error) => this.errorHandler(error))
    );
  }

  public update(item: Product, type: string = "products"): Observable<Product> {
    return this.http
      .put<Product>(`${this.endpoint}${type}/${item.id}`, item)
      .pipe(
        map((item) => item),
        catchError((error) => this.errorHandler(error))
      );
  }

  public delete(id: number, type: string = "products"): Observable<Product> {
    return this.http.delete<Product>(`${this.endpoint}${type}/${id}`).pipe(
      map((item) => item),
      catchError((error) => this.errorHandler(error))
    );
  }

  public errorHandler(error: HttpErrorResponse): Observable<any> {
    this.alertMessage(error.message, true);
    return EMPTY;
  }
}
