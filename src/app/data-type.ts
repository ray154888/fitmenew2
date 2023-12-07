export interface product {
  nm_produto: string;
  preco: number;
  categoria: string;
  cor_produto: string;
  foto: string;
  descricao: string;
  id_produto: number;
  cliente: number;
  modelo: string;
  tamanho: string;
  marca: string;
  quantidade: undefined | number;
  sku: undefined | number;
}

export interface cart {
  nm_produto: string;
  preco: number;
  categoria: string;
  cor_produto: string;
  foto: string;
  descricao: string;
  id_produto: number | undefined;
  quantidade: undefined | number;
  sku: number;
  id_login: number;
}

export interface order {
  email: string;
  endereco: string;
  contato: string;
  precoTotal: number;
  id_login: string;
  id: number | undefined;
}

export interface galeriaImages {
  previewImageSrc?: any;
  thumbnailImageSrc?: any;
  alt?: any;
  title?: any;
  price?: any;
  id: number | undefined;
}
