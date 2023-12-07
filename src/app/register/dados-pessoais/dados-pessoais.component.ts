import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CadastroService } from '../cadastro.service';

interface Genero {
  label: string;
  value: string;
}

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['../../../styles.css', './dados-pessoais.component.css'],
})
export class DadosPessoaisComponent implements OnInit {
  infoPersonal!: FormGroup;
  selectedCity!: Genero;
  __values: SelectItem[] = [];

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private SignUp: CadastroService
  ) {}

  ngOnInit() {
    this.__values = [
      { label: 'Masculino', value: 'M' },
      { label: 'Feminino', value: 'F' },
      { label: 'Prefiro não informar', value: 'O' },
    ];
    this.infoPersonal = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      lastname: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      datanascimento: [''],
      genero: [''],
      cpf: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  cadastrardados() {
    console.log(this.infoPersonal.value);
    this.SignUp.cadastrarfisico(this.infoPersonal.value).subscribe((resp) => {
      console.log(resp);
    });
    this.nextpage()
  }
  get values(): SelectItem[] {
    return this.__values;
  }

  get personal(): any {
    return this.infoPersonal.controls;
  }

  nextpage() {
    this.route.navigate(['complemento']);
  }
}