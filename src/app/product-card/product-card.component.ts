import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CatalogItem } from '../models/catalog-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  productData: CatalogItem

  imageUrl:string

  constructor() {

  }

  ngOnInit(): void {
    this.imageUrl =`https://localhost:5001/api/ProductsCatalog/images/large/${this.productData.productPhotoId}`
  }

  ngOnChanges(){
  }

}
