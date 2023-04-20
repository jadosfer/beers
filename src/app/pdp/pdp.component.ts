import { StockPriceService } from './../stock-price.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from '../../data/products';
import { Subscription } from 'rxjs';
import { Product } from '../product.interface';
import { BrandGroup } from '../brand-group.interface';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit, OnDestroy {

  productId: number = 0;
  productBrand: string = "";
  productsList: BrandGroup[] = [];
  productsToShow: any[] =  [];
  product: any;
  stock: number[] = [];
  price: number[] = [];
  brand: string = "";
  id: number = 0;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private stockPriceService: StockPriceService) { }

  ngOnInit(): void {
    this.onload();
  }

  onload() {
    this.productsList = products;
    this.route.params.subscribe(params => {
      this.id = params['param'].split("-")[0];
      this.brand = params['param'].split("-")[1];
      this.product = this.productsList.find(p => p.id == this.id && p.brand.toLowerCase() == this.brand.toLowerCase());
      this.getAllStockPriceBySkuCode();

      setInterval(() => {
        this.productsToShow = []
        this.getAllStockPriceBySkuCode();
      }, 5000);
    });
  }

  getAllStockPriceBySkuCode() {
    this.product?.skus.forEach((p: any) => {
      const subscription = this.stockPriceService.getStockPrice(p.code).subscribe((data: Product) => {
        this.productsToShow.push({
          "code": p.code,
          "name": p.name,
          "stock" : data.stock,
          "price": "$ " + data.price / 100 // cents to dollars
        });
      });
      this.subscriptions.push(subscription);
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
