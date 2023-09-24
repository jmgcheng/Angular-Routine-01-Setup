import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { IProductVariation } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProductsUrl = 'api/mockProducts';
  private mockPurchasesUrl = 'api/mockPurchases';
  private mockSalesUrl = 'api/mockSales';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProductVariation[]> {
    return this.http.get<IProductVariation[]>(this.mockProductsUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
      );
  }

  getProduct(id: number): Observable<IProductVariation | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProductVariation[]) => products.find(p => p.id === id))
      );
  }

}
