import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _httpClient = inject(HttpClient);
  private readonly _storeApiUrl = 'https://fakestoreapi.com';

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this._storeApiUrl}/products`);
  }

  addProduct(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(`${this._storeApiUrl}/products`, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this._httpClient.put<Product>(`${this._storeApiUrl}/products/${id}`, product);
  }

  deleteProduct(id: number): Observable<null> {
    return this._httpClient.delete<null>(`${this._storeApiUrl}/products/${id}`);
  }

}
