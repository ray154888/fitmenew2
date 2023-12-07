
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  meuFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.meuFormulario = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      mensagem: ['', Validators.required]
      // Outros campos do formulário podem ser adicionados aqui
    });
  }
  enviarFormulario() {
    // Lógica para enviar o formulário, n sei como fazer, o pop-up deveria ser aq
  }

}