import { Component, OnInit } from '@angular/core';
import { galeriaImages } from '../data-type';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css'],
})
export class FavoritoComponent implements OnInit {
  layout: string = 'grid';
  showMessage: boolean = true;
  countItems: number = 0;
  images!: galeriaImages[];
  paramtros: any;

  ngOnInit() {
    let dados = localStorage.getItem('favoritos');
    if (dados) {
      this.showMessage = false;
      let fav = [];
      fav = JSON.parse(dados);
      this.countItems = fav.length;
      this.images = fav;
    }
  }

  removerDosFavoritos(produto: any) {
    // Implemente a lógica para remover o produto da lista de favoritos
    // Por exemplo, se 'images' é a sua lista de favoritos:
    this.images = this.images.filter(item => item.id !== produto.id)
    let dados = localStorage.getItem('favoritos');
    if (dados) {

      let fav = [];
      fav = JSON.parse(dados);
      fav = [];
      if (this.images.length > 0) {
       
        localStorage.setItem('favoritos', `${JSON.stringify(this.images)}`);
      }
      else{
        localStorage.removeItem('favoritos');
      }
    }

    // Atualize a contagem de itens
    this.countItems = this.images.length;
  }
}
