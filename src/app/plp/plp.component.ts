import { Component, OnInit } from '@angular/core';
import products from '../../data/products';
//import image from './chop.jpg';

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
