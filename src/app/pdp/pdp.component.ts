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
  productToShow: Product = {
    code: '',
    stock: 0,
    price: 0
  };
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
      this.stockPriceService.getStockPrice(this.product.skus[0].code).subscribe((product: Product) => {
        this.productToShow = product;
      })
      this.formatChar();
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

  formatChar() {
    this.product.information = this.product.information.replace(/\(\d+\)/g, '').replace(/#\d+\s+/g, '')
    this.product.information = this.product.information.charAt(0).toUpperCase() + this.product.information.slice(1)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
