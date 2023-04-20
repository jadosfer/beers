import { StockPriceService } from './../stock-price.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from '../../data/products';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {

  productId: number = 0;
  productBrand: string = "";
  productsList: any[] = [];
  productsToShow: any[] =  [];
  product: any;
  stock: number[] = [];
  price: number[] = [];

  constructor(private route: ActivatedRoute, private stockPriceService: StockPriceService) { }

  ngOnInit(): void {
    this.stockPriceService.getPrices().subscribe(data => {
      console.log('data: ', data);
    })
    this.productsList = products;
    this.route.params.subscribe(params => {
      const id = params['param'].split("-")[0];
      const brand = params['param'].split("-")[1];
      this.product = this.productsList.find(p => p.id == id && p.brand.toLowerCase() == brand.toLowerCase());

      this.getAllStockPriceBySkuCode();

      setInterval(() => {
        this.productsToShow = []
        this.getAllStockPriceBySkuCode();
      }, 5000);
    });
  }

  getAllStockPriceBySkuCode() {
    this.product?.skus.forEach((p: any) => {
      this.stockPriceService.getStockPriceBySkuCode(p.code).subscribe((data: any) => {
        this.productsToShow.push({
          "code": p.code,
          "name": p.name,
          "stock" : data.stock,
          "price": data.price / 100 // convert from cents to dollars
        });
      });
    })
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
