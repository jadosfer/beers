import { Component, OnInit } from '@angular/core';
import products from '../../data/products';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  productsList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productsList = products;
  }

}
