import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LogonComponent } from './logon/logon.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaCidadeComponent } from './lista-cidade/lista-cidade.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path: 'cidade', component: ListaCidadeComponent },
  { path: 'cidade/:indice', component: CadastroCidadeComponent },
  { path:'usuario', component:CadastroUsuarioComponent},
  { path:'logon', component:LogonComponent},
  { path:'produto', component:ListarProdutoComponent},
  { path:'produto/:indice', component:CadastroProdutoComponent},
  { path:'cliente', component:ListarClienteComponent},
  { path:'cliente/:indice', component:CadastroClienteComponent}
];

@NgModule({  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
