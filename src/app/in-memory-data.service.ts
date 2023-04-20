import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import stockPrice from '../data/stock-price';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // stockPrice: any = {};

  stockPrice: any = {
    10167: {
      stock: 130,
      price: 2865,
    },
    10166: {
      stock: 456,
      price: 2640,
    },
  };

  constructor() {
    this.stockPrice = stockPrice;
  }

  createDb() {
    //const stockPrice = [this.stockPrice];


    // const stockPrice = [
    //   { id: 1, skuCode: 'ABC123', price: 10.99 },
    //   { id: 2, skuCode: 'DEF456', price: 19.99 },
    //   { id: 3, skuCode: 'GHI789', price: 8.99 }
    // ];
    // return { stockPrice };



    // const stockPrice = {
    //   10167: {
    //       stock: 130,
    //       price: 2865,
    //   },
    //   10166: {
    //       stock: 456,
    //       price: 2640,
    //   },}

      // return { stockPrice }

      const stockPrice = this.stockPrice;
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
