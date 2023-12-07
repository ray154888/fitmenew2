import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { galeriaImages } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ComprarService {
  constructor(private http: HttpClient) {}

  AddCart(data: galeriaImages) {
    return this.http.post<galeriaImages>('http://localhost:3000/cart', data);
  }

  GetAllCart() {
    return this.http.get<galeriaImages[]>('http://localhost:3000/cart');
  }
}
