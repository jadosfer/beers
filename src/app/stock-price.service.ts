import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {
  baseUrl = "api/stockPrice";

  constructor(private http: HttpClient) {
  }

  getPrice() {
    return this.http.get(`${this.baseUrl}`);
  }
  getStockPrice(code: string) {
    return this.http.get<Product>(`${this.baseUrl}/${code}`);
  }
}
