import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import stockPrice from '../data/stock-price';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  stockPrice: any = {};

  constructor() {
    this.stockPrice = stockPrice;
  }

  createDb() {
    const stockPrice = this.convertStockPrice();
    
    return { stockPrice };
  }

  convertStockPrice() {
    let result: any[] = [];
    let codes = Object.keys(this.stockPrice);
    codes.forEach(code => {
      const { stock, price } = this.stockPrice[code];
      result.push({
        "id": code,
        "stock": stock,
        "price": price
      });
    });

    return result;
  }
}


