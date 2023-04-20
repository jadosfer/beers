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
    // const stockPrice = [
    //   { code: 10167, stock: 141, price: 3518 },
    //   { code: 10041, stock: 141, price: 3518 },
    //   { code: 35681, stock: 141, price: 3518 }
    // ];

    const stockPrice = this.convertStockPrice();
    console.log('stockPrice2 ', stockPrice);

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


