import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import stockPrice from '../data/stock-price';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {
  baseUrl = "api/stockPrice";
  stockPrice: any = {};

  constructor(private http: HttpClient) {
    this.stockPrice = stockPrice;
  }

  getPrice() {
    return this.http.get(`${this.baseUrl}`);
  }
  getStockPrice(code: number) {
    return this.http.get<Product>(`${this.baseUrl}/${code}`);
  }
}
