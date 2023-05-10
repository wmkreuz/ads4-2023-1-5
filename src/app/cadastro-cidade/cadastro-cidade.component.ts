import { Component,OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CidadeService } from '../service/cidade.service';

export interface Cidade{
  nome:string,
  estado:string,
}

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {

  public nome:string = '';
  public estado:string = '';
  public indice:number = -1;
  @ViewChild('lista_estado_component') lista_estado:any;
  constructor(
    public actived_route:ActivatedRoute,
    public cidade_service:CidadeService
  ){}
  
  ngOnInit(): void {
    this.actived_route.params
    .subscribe((params:any) => {
      // -1 significa que é um novo registro
      if (params.indice > -1){
        this.indice = params.indice;
        let cidade = this.cidade_service.registro(this.indice);
        this.nome   = cidade.nome;
        this.estado  = cidade.estado;
      }
    });
    
  }
  salvar(){
    let cidade:Cidade = {
      nome:this.nome,
      estado:this.lista_estado.getEstado()
    }

    if (this.indice > -1){
      this.cidade_service.update(this.indice,cidade);
    }else{
      this.cidade_service.cidades.push(cidade);
      //localStorage.setItem('produto',JSON.stringify(this.produtos));
      this.cidade_service.salvar();
    }
    this.limpar();
  }

  

  limpar(){
    this.nome   = '';
    this.estado  = '';
  }
}
