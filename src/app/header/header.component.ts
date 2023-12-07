import { Component } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { galeriaImages, product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  jsonData: any = { data: [] };
  searchResults: any[] = [];

  constructor(private produtos: ProdutosService) {}

  ngOnInit() {
    this.produtos.getAllData().subscribe((data) => {
      this.jsonData = data;
    });
  }
  search(event: any) {
    const query = event.target.value;
    if (query.length >= 2) {
      console.log(this.jsonData);
      this.searchResults = this.jsonData.filter((item: any) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }
}