import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { galeriaImages } from '../data-type';

interface Tamanho {
  label: string;
  value: string;
}

@Component({
  selector: 'app-feminino',
  templateUrl: './feminino.component.html',
  styleUrls: ['./feminino.component.css'],
})
export class FemininoComponent implements OnInit {
  images!: galeriaImages[];
  sizes: Tamanho[] = [
    { label: 'PP', value: 'pp' },
    { label: 'P', value: 'p' },
    { label: 'M', value: 'm' },
    { label: 'G', value: 'g' },
    { label: 'GG', value: 'gg' },
  ];

  constructor(private produtos: ProdutosService) {}

  ngOnInit() {
    this.produtos.getImages('feminina').then((images) => {
      console.log(JSON.stringify(images));
      this.images = images;
    });
  }
}
