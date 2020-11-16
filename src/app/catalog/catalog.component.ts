import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { CatalogItem } from '../models/catalog-item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  catalogItems$: Observable<CatalogItem[]>
  pageSize: number
  pageIndex: number

  constructor(private catalogService: CatalogService) {
    this.pageIndex = 0
    this.pageSize = 25
    this.catalogItems$ = catalogService
        .loadCatalogItems(this.pageIndex, this.pageSize)
        .pipe(
          map(courses => courses.data)
        )
   }

  ngOnInit(): void {
  }
}
