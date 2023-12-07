import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { ComplementoComponent } from './complemento/complemento.component';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosJuridicoComponent } from './dados-juridico/dados-juridico.component';
import { CadastroService } from './cadastro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'cadastro', pathMatch: 'prefix' },
      { path: 'juridico', component: DadosJuridicoComponent },
      {
        path: 'cadastro',
        component: RegisterComponent,
        children: [
          {
            path: 'dadospessoais',
            component: DadosPessoaisComponent,
          },
          {
            path: 'complemento',
            component: ComplementoComponent,
          },
          {
            path: '',
            redirectTo: 'dadospessoais',
            pathMatch: 'full',
          },
        ],
      },
    ]),
    StepsModule,
    GalleriaModule,
    CarouselModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    InputMaskModule,
    DropdownModule,
    RadioButtonModule,
    ConfirmDialogModule,
  ],
  providers:[CadastroService],
    declarations: [
    RegisterComponent,
    DadosPessoaisComponent,
    ComplementoComponent,
  ],
})
export class RegisterModule {}
