import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MasculinoComponent } from './masculino/masculino.component';
import { ContatoComponent } from './contato/contato.component';
import { FemininoComponent } from './feminino/feminino.component';
import { CarinhoComponent } from './carinho/carinho.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { CompraComponent } from './compra/compra.component';
import { GaleriaProdutosComponent } from './galeria-produtos/galeria-produtos.component';
import { ReactiveFormsModule } from '@angular/forms';

// Import PrimeNG modules
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { CarouselProdutosComponent } from './carousel-produtos/carousel-produtos.component';
import { ImageDetailsDirective } from './image-details.directive';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { RegisterModule } from './register/register.module';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DadosJuridicoComponent } from './register/dados-juridico/dados-juridico.component';
import { CadastroService } from './register/cadastro.service';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EquipeComponent,
    PerfilComponent,
    MasculinoComponent,
    ContatoComponent,
    FemininoComponent,
    CarinhoComponent,
    FavoritoComponent,
    CompraComponent,
    GaleriaProdutosComponent,
    CarouselProdutosComponent,
    DadosJuridicoComponent,
    ImageDetailsDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    GalleriaModule,
    HttpClientModule,
    CarouselModule,
    TableModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    StepsModule,
    ToastModule,
    RegisterModule,
    InputMaskModule,
    DropdownModule,
    RadioButtonModule,
    ConfirmDialogModule,
    DialogModule,
    DataViewModule
  ],

  providers: [CadastroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
