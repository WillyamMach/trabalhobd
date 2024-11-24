import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:8080/products/product.php';

  constructor(private http: HttpClient) { }

  addProduct(productName: string, productValue: number): Observable<Product> {
    const data = { productName, productValue }

    return this.http.post<Product>(this.API_URL, data);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}?all`);
  }

  editProduct(id: number, name: string, val: number) {
    const data = {id: id, name: name, val: val};

    return this.http.put<void>(this.API_URL, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<void>(`${this.API_URL}?id=${id}`)
  }
}
