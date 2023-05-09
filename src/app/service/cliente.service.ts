import { Injectable } from '@angular/core';
import { Cliente } from '../cadastro-cliente/cadastro-cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public clientes:Array<Cliente> = [];
  constructor() { }

  carregar(){
    this.clientes = JSON.parse(String(localStorage.getItem('cliente')));
    return this.clientes;
  }

  excluir(indice:number){
    this.clientes.splice(indice,1);
    this.salvar();
  }  

  salvar(){
    localStorage.setItem('cliente',JSON.stringify(this.clientes));
  }

  update(indice:number,cliente:Cliente){
    this.clientes[indice] = cliente;
    this.salvar();
  }

  registro(indice:number){
    this.clientes = this.carregar();
    return this.clientes[indice];
  }  
}
