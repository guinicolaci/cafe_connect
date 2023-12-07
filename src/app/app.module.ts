import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { ProdutoBuscaComponent } from './components/produto-busca/produto-busca.component';
import { CestaComponent } from './components/cesta/cesta.component';
import { LoginComponent } from './components/login/login.component';
import { EsqueciComponent } from './components/esqueci/esqueci.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { CadastroComponent } from './components/login/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    ProdutoDetalheComponent,
    ProdutoBuscaComponent,
    CestaComponent,
    LoginComponent,
    EsqueciComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
