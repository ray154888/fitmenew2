import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { galeriaImages } from '../data-type';
import { ComprarService } from './comprar.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css'],
  providers: [ProdutosService, MessageService],
})
export class CompraComponent implements OnInit {
  images!: galeriaImages;
  sessao!: string;
  produto!: number;
  orderObj: any;

  position: string = 'left';

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(
    private produtos: ProdutosService,
    private route: ActivatedRoute,
    private rota: Router,
    private compraService: ComprarService,
    private messageCad: MessageService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.produto = params['produtos'];
      this.sessao = params['sessao'];

      this.produtos.getImagesId(this.sessao, this.produto).then((images) => {
        
        this.images = images;
        console.log(images)
      });
    });
  }

  AddToCard() {
    if (this.images) {
      if (localStorage.getItem('user')) {
        let dados = localStorage.getItem('cart');
        this.compraService.AddCart(this.images).subscribe(() => {});
        if (!dados) {
          localStorage.setItem('cart', `[${JSON.stringify(this.images)}]`);
        } else {
          const arrAgain = JSON.parse(dados);
          arrAgain.push(this.images);
          localStorage.setItem('cart', JSON.stringify(arrAgain));
        }

        this.messageCad.add({
          severity: 'success',
          summary: `Produto - ${this.images.title}`,
          detail: 'Item Adicionado ao carinho!',
        });
        setTimeout(() => {
          this.rota.navigate(['']);
        }, 1000);
      } else {
        this.messageCad.add({
          severity: 'error',
          summary: '',
          detail: 'Usuario deve efetuar login ou se cadastrar!',
        });
      }
    }
  }

  selecionarCor(cor: string) {
    // Implemente a lógica para lidar com a seleção da cor
    console.log(`Cor selecionada: ${cor}`);
  }
  
}
