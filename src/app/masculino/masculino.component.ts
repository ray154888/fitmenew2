import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { galeriaImages } from '../data-type';

interface Tamanho {
  label: string;
  value: string;
}

@Component({
  selector: 'app-masculino',
  templateUrl: './masculino.component.html',
  styleUrls: ['./masculino.component.css'],
})
export class MasculinoComponent implements OnInit {
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
    this.produtos.getImages('masculina').then((images) => {
      console.log(JSON.stringify(images));
      this.images = images;
    });
  }
}

