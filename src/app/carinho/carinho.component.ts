
import { Component, OnInit } from '@angular/core';
import { galeriaImages } from '../data-type';
import { ComprarService } from '../compra/comprar.service';

@Component({
  selector: 'app-carinho',
  templateUrl: './carinho.component.html',
  styleUrls: ['./carinho.component.css'],
})
export class CarinhoComponent implements OnInit {
  showMesage: boolean = true;
  images!: galeriaImages[];
  count: number = 0;
  total: number | undefined;

  constructor(private compra: ComprarService) {}

  ngOnInit() {

    
    this.compra.GetAllCart().subscribe((resp) => {
      this.showMesage = false;
      this.count = resp.length;
      this.images = resp;
      this.calcularTotal();
    });
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

    this.images = this.images.filter(item => item.id !== produto.id);
    console.log (this.images)
    let dados = localStorage.getItem('cart');
    if (dados) {
      let carrinho = [];
      carrinho = JSON.parse(dados);
      carrinho = this.images;
      if (this.images.length > 0) {
       console.log(carrinho)
        localStorage.setItem('cart', `${JSON.stringify(carrinho)}`);
      } else {
        localStorage.removeItem('cart');
      }
    }
    this.count = this.images.length;
    this.calcularTotal();
  }
}  