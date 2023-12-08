import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { galeriaImages } from '../data-type';
import { ComprarService } from '../compra/comprar.service';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarinhoComponent implements OnInit {
  showMessage: boolean = true;
  images!: galeriaImages[];
  count: number = 0;
  total: number | undefined;

  constructor(
    private compra: ComprarService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadCartItens();
  }

  loadCartItens() {
    let dados = localStorage.getItem('cart');
    if (dados) {
      let cart = [];
      cart = JSON.parse(dados);
      if (cart.length != 0) {
        this.showMessage = false;
        this.count = cart.length;
        this.images = cart;
        this.calcularTotal();
      }
    } else {
      this.compra.GetAllCart().subscribe((resp) => {
        if (resp.length != 0) {
          this.showMessage = false;
          this.count = resp.length;
          this.images = resp;
          localStorage.setItem('cart', `${JSON.stringify(resp)}`);
          this.calcularTotal();
        }
      });
    }
  }

  calcularTotal() {
    let total = 0;
    for (let item of this.images) {
      total += parseFloat(item.price);
    }

    this.total = total;
  }
  //não está com a função de adicionar ao carrinho, provavelmente esses items do carrinho estão estáticos

  removerDoCarrinho(produto: any) {
    this.images = this.images.filter((item) => item.id !== produto.id);
    let dados = localStorage.getItem('cart');
    if (dados) {
      let carrinho = [];
      carrinho = JSON.parse(dados);
      carrinho = this.images;
      this.compra.RemoveItemCart(produto.id).subscribe((r) => {

      });
      if (this.images.length > 0) {
        localStorage.setItem('cart', `${JSON.stringify(carrinho)}`);
      } else {
        localStorage.removeItem('cart');
      }
    }
    this.count = this.images.length;
    this.calcularTotal();
    if (this.count == 0) {
      this.showMessage = true;
    }
  }
}
