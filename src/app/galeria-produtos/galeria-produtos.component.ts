import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-galeria-produtos',
  templateUrl: './galeria-produtos.component.html',
  styleUrls: ['./galeria-produtos.component.css'],
  providers: [ProdutosService]
})
export class GaleriaProdutosComponent implements OnInit {
  images!: any[] ;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  constructor(private produtos: ProdutosService) { }

  ngOnInit() {
    this.produtos.getImages('photos').then((images) => {
      console.log(JSON.stringify(images));
      this.images = images;
    });
  }

}
