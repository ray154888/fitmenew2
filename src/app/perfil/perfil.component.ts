import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from '../register/cadastro.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [MessageService],
})
export class PerfilComponent implements OnInit {
  loading: boolean = false;
  visible: boolean = false;
  loginForm!: FormGroup;
  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private login: CadastroService,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  userLogin() {
    this.load();
    this.login.login(this.loginForm.value).subscribe((resp) => {
      if (Array.isArray(resp)) {
        if (
          resp[0].email == this.loginForm.controls['email'].value &&
          resp[0].password == this.loginForm.controls['password'].value
        ) {
          localStorage.setItem('user', JSON.stringify(resp));
          this.route.navigate(['']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Cliente não encontrado',
            detail:
              'Por favor verique se foi informado email e senha corretos!',
          });
        }
      }
    });
  }

  mostraDialog() {
    this.visible = true;
  }
  confirmar(tp: number) {
    this.visible = false;
    if (tp == 0) {
      this.route.navigateByUrl('/Register');
    } else {
      this.route.navigateByUrl('/Register/juridico');
    }
  }
}
