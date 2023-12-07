import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cart, galeriaImages, order, product } from '../data-type';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  cartData = new EventEmitter<product[] | []>();
  constructor(private http: HttpClient) {}

  addProduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/products');
  }

  getImages(param: string) {
    return this.http
      .get<any>(`assets/${param}.json`)
      .toPromise()
      .then((res) => <galeriaImages[]>res.data)
      .then((data) => {
        return data;
      });
  }

  async getImagesId(param: string, id: number) {
    let result: any;
    return this.http
      .get<any>(`assets/${param}.json`)
      .toPromise()
      .then((res) => <galeriaImages[]>res.data)
      .then((data) => {
        data.forEach((items) => {
          if (items.id == id) {
            result = items;
          }
        });
        return result;
      });
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product: product) {
    return this.http.put<product>(
      `http://localhost:3000/products/${product.id_produto}`,
      product
    );
  }
  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=8');
  }

  searchProduct(query: string) {
    return this.http.get<product[]>(
      `http://localhost:3000/products?q=${query}`
    );
  }

  localAddToCart(data: product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: product[] = JSON.parse(cartData);
      items = items.filter((item: product) => productId !== item.id_produto);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cart', cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }
  removeToCart(cartId: number) {
    return this.http.delete('http://localhost:3000/cart/' + cartId);
  }
  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>(
      'http://localhost:3000/cart?userId=' + userData.id
    );
  }

  orderNow(data: order) {
    return this.http.post('http://localhost:3000/orders', data);
  }
  orderList() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<order[]>(
      'http://localhost:3000/orders?userId=' + userData.id
    );
  }

  deleteCartItems(cartId: number) {
    return this.http
      .delete('http://localhost:3000/cart/' + cartId)
      .subscribe((result) => {
        this.cartData.emit([]);
      });
  }

  cancelOrder(orderId: number) {
    return this.http.delete('http://localhost:3000/orders/' + orderId);
  }

  getAllData(): Observable<any> {
    // aqui eu puxo todos os dados dos json e retiro a primeira camada "data"
    const masculina = this.http
      .get('assets/masculina.json')
      .pipe(map((data: any) => data.data));
    const feminina = this.http
      .get('assets/feminina.json')
      .pipe(map((data: any) => data.data));

    // aqui junto tudo em um array só para facilitar a busca
    return forkJoin([masculina, feminina]).pipe(
      map(([masculinaData, femininaData]) => masculinaData.concat(femininaData))
    );
  }
}