import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  urlApi = 'https://localhost:44343/api';

  getAllProducts() {
    return this.http.get(this.urlApi + '/Products');
  }

  getProductById(id: number) {
    return this.http.get(this.urlApi + `/Products/${id}` );
  }
}
