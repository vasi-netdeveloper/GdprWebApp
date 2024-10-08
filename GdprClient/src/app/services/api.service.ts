import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IProduct } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = {
    'content-type': 'application/json',
  };

  baseUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  getAllProducts() {
    return this.http.get<IProduct[]>(this.baseUrl + '/api/Products');
  }
  createProduct(product: IProduct) {
    return this.http.post(this.baseUrl + '/api/Products', product);
  }
  getProduct(productId: string) {
    return this.http.get<IProduct>(
      this.baseUrl + '/api/Products/' + productId
    );
  }
  updateProduct(productId: string, product: IProduct) {
    return this.http.put<IProduct>(
      this.baseUrl + '/api/Products/' + productId,
      product
    );
  }
  deleteProduct(productId: string) {
    return this.http.delete(this.baseUrl + '/api/Products/' + productId);
  }
}
