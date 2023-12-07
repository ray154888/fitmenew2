export interface CadastraDadosFisica {
  name: string;
  lastname: string;
  datanascimento: string;
  genero: string;
  cpf: string;
  email: string;
  password: string;
  cidade: string;
  endereco: string;
  numero: number;
  bairro: string;
  complemento: string;
  celular: string;
}

export interface Login {
  email: string | null;
  password: string | null;
}
