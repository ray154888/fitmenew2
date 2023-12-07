import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastraDadosFisica, Login } from './model/cadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  cadastrarfisico(data: CadastraDadosFisica) {
    return this.http.post<CadastraDadosFisica>(
      'http://localhost:3000/cliente',
      data
    );
  }

  login(data: Login) {
    return this.http.get<Login>(`http://localhost:3000/cliente?email=${data.email}&password=${data.password}`);
  }
}
