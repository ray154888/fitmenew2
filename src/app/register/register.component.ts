import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles.css', './register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(public messageService: MessageService) {}
  ngOnInit() {
    this.items = [
      { label: 'Dados Pessoais', routerLink: 'dadospessoais' },
      { label: 'Complemento', routerLink: 'complemento' },
    ];
  }
}
