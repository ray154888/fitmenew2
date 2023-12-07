import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CnpjwsService {
  constructor(private http: HttpClient) {}

  consultacep(cep: string) {
    return this.http.get(`https://publica.cnpj.ws/cnpj/${cep}`);
  }
}
