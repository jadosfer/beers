import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import stockPrice from '../data/stock-price';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {
  baseUrl = "api/stockPrice";
  stockPrice: any = {};

  constructor(private http: HttpClient) {
    this.stockPrice = stockPrice;
  }

  getStockPrice() {
    return this.http.get(`${this.baseUrl}`);
  }
}
