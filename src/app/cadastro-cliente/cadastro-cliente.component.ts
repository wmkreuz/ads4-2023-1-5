import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

export interface Cliente{
  nome:string,
  cpf:string,
  cidade:string
}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit{

  public nome:string = '';
  public cpf:string = '';
  public cidade:string = '';
  public indice:number = -1;

  constructor(
    public actived_route:ActivatedRoute,
    public cliente_service:ClienteService
  ){}
  
  ngOnInit(): void {
    this.actived_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice = params.indice;
        let cliente = this.cliente_service.registro(this.indice);
        this.nome   = cliente.nome;
        this.cpf  = cliente.cpf;
        this.cidade  = cliente.cidade;
      }
    });
    
  }
  salvar(){
    let cliente:Cliente = {
      nome:this.nome,
      cpf:this.cpf,
      cidade:this.cidade
    }

    if (this.indice > -1){
      this.cliente_service.update(this.indice,cliente);
    }else{
      this.cliente_service.clientes.push(cliente);
      //localStorage.setItem('produto',JSON.stringify(this.produtos));
      this.cliente_service.salvar();
    }
    this.limpar();
  }

  

  limpar(){
    this.nome   = '';
    this.cpf  = '';
    this.cidade  = '';
  }

}
