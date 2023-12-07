import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipeComponent } from './equipe/equipe.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MasculinoComponent } from './masculino/masculino.component';
import { ContatoComponent } from './contato/contato.component';
import { FemininoComponent } from './feminino/feminino.component';
import { CarinhoComponent } from './carinho/carinho.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { CompraComponent } from './compra/compra.component';
import { GaleriaProdutosComponent } from './galeria-produtos/galeria-produtos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Equipe', component: EquipeComponent },
  { path: 'Perfil', component: PerfilComponent },
  { path: 'Masculino', component: MasculinoComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'Feminino', component: FemininoComponent },
  { path: 'Carinho', component: CarinhoComponent },
  { path: 'Favoritos', component: FavoritoComponent },
  { path: 'Compra', component: CompraComponent },
  {
    path: 'Register',loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
