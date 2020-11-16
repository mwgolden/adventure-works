import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable }  from 'rxjs';
import { CatalogItem } from './models/catalog-item';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  loadCatalogItems(pageIndex:number, pageSize:number): Observable<any> {
    const params = new HttpParams()
      .set('pageIndex', String(pageIndex))
      .set('pageSize', String(pageSize))

      return this.http.get("http://localhost:5000/api/ProductsCatalog", {params})
  }
  getImages(){
    return this.http.get("http://localhost:5000/api/ProductsCatalog/images")
  }
}
