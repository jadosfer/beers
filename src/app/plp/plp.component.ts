import { Component, OnInit } from '@angular/core';
import products from '../../data/products';
import { Product } from '../product.interface';
import { StockPriceService } from '../stock-price.service';
//import image from './chop.jpg';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  productsList: any[] = [];

  constructor(private stockPriceService: StockPriceService) { }

  ngOnInit(): void {
    this.productsList = products;
    this.productsList.forEach(product => {
      this.stockPriceService.getStockPrice(product.skus[0].code).subscribe((prod: Product) => {
        product.priceToShow = + prod.price/100;
      });
    });
  }

}
