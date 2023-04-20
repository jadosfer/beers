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

  // getStockPriceBySkuCode(code: number): Observable<any> {
  //   return of(this.stockPrice[code]);
  // }

  getPrices() {
    return this.http.get<any>(this.baseUrl)
  }

  getPricesById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getStockPriceBySkuCode(code: number) {
    return this.http.get('/api/stockprice/' + code);
  }
}
