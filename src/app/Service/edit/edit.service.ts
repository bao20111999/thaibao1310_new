import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  editProduct(id: number) {
    throw new Error('Method not implemented.');
  }
  private url = "https://60d040937de0b20017108146.mockapi.io/myShopApi/cart";
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.url}`)
  }
  editProductCart(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}