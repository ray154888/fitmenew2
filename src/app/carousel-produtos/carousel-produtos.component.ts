import { Component, Input, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { MessageService } from 'primeng/api';
import { galeriaImages } from '../data-type';

@Component({
  selector: 'app-carousel-produtos',
  templateUrl: './carousel-produtos.component.html',
  styleUrls: ['./carousel-produtos.component.css'],
  providers: [ProdutosService, MessageService],
})
export class CarouselProdutosComponent implements OnInit {
  images!: galeriaImages[];
  paramtros: string = 'photos';

  @Input() titulo!: string;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor(
    private produtos: ProdutosService,
    private messageFav: MessageService
  ) {}

  ngOnInit() {
    if (this.titulo === 'MODA FEMININA') this.paramtros = 'feminina';
    else if (this.titulo === 'MODA MASCULINA') {
      this.paramtros = 'masculina';
    }
    this.produtos.getImages(this.paramtros).then((images) => {
      console.log(JSON.stringify(images));
      this.images = images;
    });
  }

  addFavoritos(prod: galeriaImages) {
    console.log(prod);
    let dados = localStorage.getItem('favoritos');
    if (!dados) {
      localStorage.setItem('favoritos', `[${JSON.stringify(prod)}]`);
    } else {
      let prods = [];
      prods = JSON.parse(dados);
      prods.push(prod);
      localStorage.setItem('favoritos', JSON.stringify(prods));
    }
    this.messageFav.add({
      severity: 'success',
      summary: `Produto - ${prod.title}`,
      detail: 'Item Adicionado ao Favorito!',
    });
  }
}
