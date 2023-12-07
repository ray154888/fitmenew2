import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CnpjwsService } from './cnpjws.service';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-dados-juridico',
  templateUrl: './dados-juridico.component.html',
  styleUrls: ['./dados-juridico.component.css'],
})
export class DadosJuridicoComponent implements OnInit {
  loading: boolean = false;
  visible: boolean = false;
  Juridico!: FormGroup;

  load() {
    this.loading = true;
    this.cadastrardados();

    setTimeout(() => {
      this.loading = false;
      this.route.navigate(['/Perfil'])
    }, 2000);
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private cep: CnpjwsService,
    private SignUp: CadastroService
  ) {}
  ngOnInit() {
    this.Juridico = this.fb.group({
      cnpj: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get cnpj() {
    return this.Juridico.controls['cnpj'];
  }

  get razaosocial() {
    return this.Juridico.controls['name'];
  }

  get nomefantasia() {
    return this.Juridico.controls['lastname'];
  }

  get email() {
    return this.Juridico.controls['email'];
  }

  get password() {
    return this.Juridico.controls['password'];
  }

  removerCaracteresEspeciais(cep: string) {
    return cep.replace(/[.-/-]/g, '');
  }
  consultarcep() {
    let cpnj = this.removerCaracteresEspeciais(
      this.Juridico.controls['cnpj'].value
    );
    this.cep.consultacep(cpnj).subscribe((resp:any) => {
      this.Juridico.controls['name'].setValue(resp.razao_social);
      this.Juridico.controls['lastname'].setValue(resp.estabelecimento.nome_fantasia);
      console.log(resp);
    });
  }


  cadastrardados() {
    console.log(this.Juridico.value);
    this.SignUp.cadastrarfisico(this.Juridico.value).subscribe((resp) => {
      console.log(resp);
    });
  }
}
