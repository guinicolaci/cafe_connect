import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CestaComponent } from './components/cesta/cesta.component';
import { EsqueciComponent } from './components/esqueci/esqueci.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoBuscaComponent } from './components/produto-busca/produto-busca.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: VitrineComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'senha', component: EsqueciComponent },
  { path: 'busca', component: ProdutoBuscaComponent },
  { path: 'detalhe', component: ProdutoDetalheComponent },
  { path: 'cesta', component: CestaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
