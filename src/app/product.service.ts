import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
  private fournisseurId: string = '401000208'; //< !> ICI mettre votre fournisseur à vous !!
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // if (this.products.length>0){
    // return this.products;
    // }
    return this.http.get<any>(this.productsUrl + this.fournisseurId);
  }
}
