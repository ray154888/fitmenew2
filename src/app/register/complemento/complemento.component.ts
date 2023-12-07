import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-complemento',
  templateUrl: './complemento.component.html',
  styleUrls: ['../../../styles.css', './complemento.component.css'],
  providers: [MessageService],
})
export class ComplementoComponent implements OnInit {
  complemento!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.complemento = this.fb.group({
      cidade: [''],
      endereco: [''],
      numero: [''],
      bairro: [''],
      complemento: [''],
    });
  }

  paginaAnterior() {
    this.router.navigate(['dadospessoais']);
  }

  CadastrarDados() {
    this.messageService.add({
      severity: 'success',
      summary: 'Cliente Cadastrado',
      detail: 'Cadastro Realizado com sucesso!',
    });

    setTimeout(() => {
      this.router.navigate(['/Perfil']);
    }, 2000);
  }
}
