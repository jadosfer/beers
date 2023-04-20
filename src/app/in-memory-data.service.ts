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
    debugger
    // const stockPrice = this.stockPrice;
    // console.log('stockPrice ', stockPrice);
    // return { stockPrice }

    const stockPrice = [
      { id: 1, skuCode: 'ABC123', price: 10.99 },
      { id: 2, skuCode: 'DEF456', price: 19.99 },
      { id: 3, skuCode: 'GHI789', price: 8.99 }
    ];
    return { stockPrice };

    // return {
    //   stockPrice,
    //   'api/stockprice/:code': (req: any) => {
    //     const code = req.params.code;
    //     const product = this.stockPrice.find((p: { code: number }) => p.code == +code);
    //     debugger
    //     return { body: product };
    //   }
    // };
  }
}
